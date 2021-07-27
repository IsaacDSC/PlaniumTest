<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

$PRICES = [];
function saveDatabase ($data){
    $database = fopen(__DIR__.'../../../../database'.'database.json','w');
    fwrite($database,$data);
    fclose($database);
}
function ReadDatabase (){
    $database = fopen(__DIR__.'../../../../database'.'database.json','w');
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
                saveDatabase(json_encode(['as'=>$acess['prices'][0]]));
                return redirect('/price/plan');
            } else {
                return 'Esta aplicação não permitirá injeção de código';
            }
        } else {
            return 'ERROR:BackEnd - Houve um problema, tente novamente mais tarde';
        }
    }


    public function choicePlan(){    
        $response = Http::get($GLOBALS['baseAPI'].'/choices/disponibles')->body();
        $testes = json_decode($response, true);
        echo(gettype($testes));
        echo $testes['array'];
        //  return $testes;
        /* $choices_obj = json_encode($choices, true); 
         echo(gettype($choices_obj));  */ 
        //return $choices_obj; */
        //return view('choicePlan', ['choices'=>$choices_obj]);
    }
}
