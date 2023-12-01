<?php
if (isset($_POST['nilai'])) {
        $jumlah_matkul = count($_POST['nilai']);
        $total_poin_maksimal = 0;
        $total_nilai = 0;
        $total_matkul = 0;

        for ($i = 0; $i < $jumlah_matkul; $i++) {
            $value = array();
            $value[$i] = $_POST['nilai'][$i];
            // if ($x[$i] > 80 && $x[$i] <= 100) {
            //   $x[$i] = 4;
            // }elseif($x[$i] > 60 && $x[$i] <= 80){
            //   $x[$i] = 3.5;
            // }elseif ($x[$i] > 40 && $x[$i] <= 60) {
            //   $x[$i] = 3;
            // }elseif ($x[$i] > 20 && $x[$i] <= 40) {
            //   $x[$i] = 2;
            // }elseif ($x[$i] > 0 && $x[$i] <= 20) {
            //   $x[$i] = 1;
            // }else{
            //   $x[$i] = 0;
            // }
            $total_poin_maksimal += 100;
            $total_nilai += $value[$i];
            $total_matkul++;
            $IPK = $total_nilai / $total_poin_maksimal * 4;
            
            if ($IPK>=3.0){
                $status = "LULUS";
            }
            else{
                $status = "TIDAK LULUS";
            }
        }

        // Menghitung IPK
       

        // Menampilkan hasil IPK
        echo "<h3>Hasil Perhitungan IPK:</h3>";
        echo "Total Nilai: " . number_format($total_nilai, 2) . "<br>";
        echo "Jumlah Mata Kuliah yang Diambil: " . number_format($total_matkul, 2) . "<br>";
        echo "IPK: " . number_format($IPK, 2) . "<br>";
        echo "STATUS: " . $status . "<br>";

     

        echo "<a href='index.html'> kembali <a>";
    }
  ?>