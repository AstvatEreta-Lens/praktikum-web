document.getElementById("buy").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai dari inputan
    var selectedBarang = document.getElementById("barang-t").value;
    var jumlahPesanan = parseInt(document.getElementById("jumlah-t").value);
    var voucherCode = document.getElementById("voucher-t").value;

    // Menentukan harga barang berdasarkan pilihan pengguna
    var hargaBarang = parseInt(selectedBarang);

    // Menghitung total harga tanpa diskon
    var totalHarga = hargaBarang * jumlahPesanan;

    // Menghitung diskon berdasarkan kode voucher
    var diskon = 0;
    if (voucherCode === "DISKON10") {
        diskon = 0.1 * totalHarga; // Diskon 10%
    } else if (voucherCode === "ASPRAKLEONGANTENG") {
        diskon = 0.2 * totalHarga; // Diskon 20%
    }

    // Menghitung total harga setelah diskon
    var totalSetelahDiskon = totalHarga - diskon;

    // Menampilkan hasil pada elemen output
    document.getElementById("order-name").textContent = document.getElementById("barang-t").options[document.getElementById("barang-t").selectedIndex].text;
    document.getElementById("jumlah-pesanan").textContent =  jumlahPesanan;
    document.getElementById("total-diskon").textContent =  diskon;
    document.getElementById("total-harga").textContent =  totalSetelahDiskon;
});

  
