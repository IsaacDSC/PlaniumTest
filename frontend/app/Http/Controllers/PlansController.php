<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http as FacadesHttp;

class PlansController extends Controller
{
    function index()
    {
        $plans = FacadesHttp::get('http://127.0.0.1:3333/')->body();
        $Planos_obj = json_decode($plans, true);
        /* foreach($Planos_obj as $plan){
            echo(json_encode($plan));
            echo(json_encode($plan['nome']));
            echo(json_encode($plan['codigo']));
        } */
        return view('index', ['plans' => $Planos_obj]);
    }

    public function search(Request $request)
    {
        $body = $request;
        $objPlan = ['codigo' => $body->codigo, 'idade' => $body->idade, 'dependentes' => $body->dependentes];
        $json_Data = json_encode($objPlan);
        $reponse = FacadesHttp::post('http://127.0.0.1:3333/plan/register')->json($objPlan);
        return $reponse;
    }
}
