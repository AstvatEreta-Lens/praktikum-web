<?php

// Deklarasi variabel
$users = [
    "asd@gmail.com" => "123", 
    "alex@gmail.com" => "1234",  // Perbaikan: Ganti array key dengan nilai email yang sebenarnya
];

// Validasi input
$email = isset($_POST['email']) ? $_POST['email'] : null; // Perbaikan: Cek apakah 'email' ada dalam $_POST
$password = isset($_POST['password']) ? $_POST['password'] : null; // Perbaikan: Cek apakah 'password' ada dalam $_POST

// Cek apakah email dan password ada dalam array
if ($email && $password && array_key_exists($email, $users) && $users[$email] == $password) {
    // Login berhasil
    header("Location: index.html");
    exit(); 
} else {
    // Login gagal
    echo "Login gagal.";
}

?>
