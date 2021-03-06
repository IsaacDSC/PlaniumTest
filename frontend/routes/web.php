<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlansController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PlansController::class, 'index']);
Route::post('/price/plan', [PlansController::class, 'search']);
Route::get('/price/plan', [PlansController::class, 'choicePlan']);
