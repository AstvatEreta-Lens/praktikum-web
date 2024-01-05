function searchMovies() {
    $("#movie-list").html("");
    $.ajax({
      url: "http://www.omdbapi.com",
      type: "get",
      dataType: "json",
      data: {
        apikey: "6c4dfc24",
        s: $("#search-input").val(),
      },
      success: function (result) {
        if (result.Response == "True") {
          let movies = result.Search;
          $.each(movies, function (i, data) {
            $("#movie-list").append(
              `
              <div class="col-md-4">
                  <div class="card    mb-3">
                  <img src="` +
                data.Poster +
                `" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">` +
                data.Title +
                `</h5>
                      <h6 class="card-subtitle mb-2 text-muted">` +
                data.Year +
                `</h6>
                      <h6 class="card-subtitle mb-2 text-muted">` +
                data.Type +
                `</h6>
                      <a href="#" class="card-link see-details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
                data.imdbID +
                `">See Details</a>
                      </div>
                  </div>
              </div?
              `
            );
          });
  
          $("#search-input").val("");
        } else {
          $("#movie-list").html(
            `
                  <h2>` +
              result.Error +
              `</h2>
                  `
          );
        }
      },
    });
  }
  
  $("#search-button").on("click", function () {
    searchMovies();
  });
  
  $("#search-input").on("keyup", function (e) {
    if (e.keyCode === 13) {
      searchMovies();
    }
  });
  
  $("#movie-list").on("click", ".see-details", function (data) {
    $.ajax({
      url: "http://www.omdbapi.com",
      type: "get",
      dataType: "json",
      data: {
        apikey: "6c4dfc24",
        i: $(this).data("id"),
      },
      success: function (movie) {
        if (movie.Response === "True") {
          $(".modal-body").html(
            `
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-4">
                          <img src="` +
              movie.Poster +
              `" alt="" class="img-fluid">
                          </div>
                          <div class="col-md-8">
                              <ul class="list-group">
                                  <li class="list-group-item"><h4>` +
              movie.Title +
              `</h4></li>
              <li class="list-group-item">Year : ` +
              movie.Year +
              `</li>
              <li class="list-group-item">Rated : ` +
              movie.Rated +
              `</li>
              <li class="list-group-item">Released : ` +
              movie.Released +
              `</li>
              <li class="list-group-item">Genre : ` +
              movie.Genre +
              `</li>
              <li class="list-group-item">Director : ` +
              movie.Director +
              `</li>
              <li class="list-group-item">Writer : ` +
              movie.Writer +
              `</li>
              <li class="list-group-item">Actor(s) : ` +
              movie.Actors +
              `</li>
              <li class="list-group-item">Synopsis : ` +
              movie.Plot +
              `</li>
                                  
                              </ul>
                          </div>
                      </div>
                  </div>
              `
          );
        }
      },
    });
  });
  