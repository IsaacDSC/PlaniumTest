<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http as FacadesHttp;

class PlansController extends Controller
{
    function index()
    {
        $plans = FacadesHttp::get('http://127.0.0.1:3333/')->body();
        $Planos_obj = json_decode($plans,true);      
        /* foreach($Planos_obj as $plan){
            echo(json_encode($plan));
            echo(json_encode($plan['nome']));
            echo(json_encode($plan['codigo']));
        } */
        return view('index', ['plans' => $Planos_obj]);
    }

    function search()
    {
    }
}
