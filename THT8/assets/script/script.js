
const toggleButton = document.querySelector(".toggle-button");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Menghentikan pengajuan formulir standar

  // Mendapatkan nilai dari setiap input
  var nameValue = document.getElementsByName('name')[0].value;
  var emailValue = document.getElementsByName('email')[0].value;
  var satisfactionValue = document.getElementsByName('satisfaction')[0].value;
  var feedbackValue = document.getElementsByName('feedback')[0].value;
  

  // Menampilkan nilai pada elemen output
  document.getElementById('output').innerHTML = `
      <p>Name: ${nameValue}</p>
      <p>Email: ${emailValue}</p>
      <p>Satisfaction: ${satisfactionValue}</p>
      <p>Feedback: ${feedbackValue}</p>
  `;
});
