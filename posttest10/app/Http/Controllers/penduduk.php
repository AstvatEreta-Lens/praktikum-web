<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class penduduk extends Controller
{
    public function viewDataPenduduk(){
        return view('inputData');
    }
    public function sendPenduduk(Request $request){

        $data=[
            'nik'=>$request->input('nik'),
            'nama'=>$request->input('nama'),
            'provinsi'=>$request->input('provinsi'),
            'kota'=>$request->input('kota'),
            'notelp'=>$request->input('notelp'),

        ];

        return view('dashboardAdmin', compact('data'));
    }

}
