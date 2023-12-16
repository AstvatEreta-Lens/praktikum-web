<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale())
}}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,
initial-scale=1">
    <title>Pemesanan</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
</head>

<body>
    <h1>Form Pemesanan</h1>

    <form method="post" action="{{ route('submit-f')
}}">
        @csrf
        <label for="nik">NIK:</label>
        <input type="text" id="nik" name="nik" required><br>
        <label for="nama">Nama:</label>
        <input type="text" id="nama" name="nama" required><br>
        <label for="provinsi">Provinsi:</label>
        <input type="text" id="provinsi" name="provinsi" required><br>
        <label for="kota">kota:</label>
        <input type="text" id="kota" name="kota" required><br>
        <label for="notelp">No Telpon:</label>
        <input type="text" id="notelp" name="notelp" required><br>
        <button type="submit">Submit</button>
    </form>
</body>

</html>