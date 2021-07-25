<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

$PRICES = [];
function saveDatabase ($data){
    $database = fopen(__DIR__.'../../../../database'.'database.json','w');
    fwrite($database,$data);
    fclose($database);
    #$save = saveDatabase(json_encode(['as'=>'']);

}
$GLOBALS['baseAPI'] = 'http://127.0.0.1:3333';

class PlansController extends Controller
{
    function index()
    {
        $plans = Http::get($GLOBALS['baseAPI'].'/')->body();
        $Planos_obj = json_decode($plans, true);
        return view('index', ['plans' => $Planos_obj]);
    }

    public function search(Request $request)
    {       
        $response = Http::post($GLOBALS['baseAPI']."/plan/choice", $request->all());
        $acess = json_decode($response, true);      
        if ($response->ok()) {
            $checkToken = $request->_token == $acess['_token'];
            if ($checkToken && $acess['prices'][0]) {
                return redirect('/price/plan');
            } else {
                return 'Você não pode injetar código aqui estou deletando os dados salvos';
            }
        } else {
            return 'ERROR:BackEnd - Houve um problema, tente novamente mais tarde';
        }
    }


    public function choicePlan(){    
        $choices = Http::get($GLOBALS['baseAPI'].'/choices/disponibles')->body();
        $choices_obj = json_decode($choices, true); 
        /* echo($choices);  
        return $choices_obj; */
        return view('choicePlan', ['choices'=>$choices]);
    }
}
