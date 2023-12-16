<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale())
}}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,
initial-scale=1">
    <title>Selamat Datang</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
</head>

<body>
    <h1>Selamat Datang!</h1>
    <p>Nik: {{ $data['nik'] }}</p>
    <p>Nama: {{ $data['nama'] }}</p>
    <p>provinsi: {{ $data['provinsi'] }}</p>
    <p>kota: {{ $data['kota'] }}</p>
    <p>Nomor Telpon: {{ $data['notelp'] }}</p>
</body>

</html>