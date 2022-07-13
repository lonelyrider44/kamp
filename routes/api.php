<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [\App\Http\Controllers\API\JwtAuthController::class, 'login']);
Route::post('/kamp/aktivni',[\App\Http\Controllers\KampController::class,'aktivni']);
Route::post('/kamp/aktivni2',[\App\Http\Controllers\KampController::class,'aktivni2']);
Route::post('/kamp/statusi',[\App\Http\Controllers\KampController::class,'statusi']);
Route::post('/prijava',[\App\Http\Controllers\PrijavaController::class,'store']);
Route::apiResource('velicina', \App\Http\Controllers\VelicinaController::class);
Route::apiResource('pol', \App\Http\Controllers\PolController::class);
Route::apiResource('trener', \App\Http\Controllers\TrenerController::class);

Route::post('/mesto/autocomplete', [App\Http\Controllers\MestoController::class,'autocomplete']);
// Route::post('refresh', [\App\Http\Controllers\AuthController::class, 'refresh']);


// Route::middleware(['assign.guard:roditelj','jwt.auth'])->group(function () {
Route::middleware(['assign.guard','jwt.auth'])->group(function () {
    Route::apiResource('kamp', \App\Http\Controllers\KampController::class);
    Route::get('kamp/{kamp}/smene',[\App\Http\Controllers\KampController::class,'smene']);
    Route::get('kamp/{kamp}/ucesnici',[\App\Http\Controllers\KampController::class,'ucesnici']);
    Route::get('kamp/{kamp}/dashboard_stats',[\App\Http\Controllers\KampController::class,'dashboard_stats']);
    Route::get('smena/{smena}/ucesnici',[\App\Http\Controllers\SmenaController::class,'ucesnici']);
    Route::apiResource('prijava', \App\Http\Controllers\PrijavaController::class)->except(['store']);
    Route::post('prijava/statusi', [\App\Http\Controllers\PrijavaController::class,'statusi']);
    Route::post('prijava/{prijava}/cimeri/{broj_sobe}', [\App\Http\Controllers\PrijavaController::class,'cimeri']);
    Route::apiResource('smena', \App\Http\Controllers\SmenaController::class);
    Route::apiResource('ucesnik', \App\Http\Controllers\UcesnikController::class);
    Route::apiResource('lokacija', \App\Http\Controllers\MestoController::class);
    Route::apiResource('korisnik', \App\Http\Controllers\KorisnikController::class);
    Route::apiResource('uplata', \App\Http\Controllers\UplataController::class);
    Route::apiResource('administrator',\App\Http\Controllers\AdministratorController::class);
    Route::apiResource('trener',\App\Http\Controllers\TrenerController::class);
    Route::apiResource('roditelj',\App\Http\Controllers\RoditeljController::class);
    Route::get('roditelj/{roditelj}/ucesnici',[\App\Http\Controllers\RoditeljController::class,'ucesnici']);
    Route::apiResource('zahtev',\App\Http\Controllers\ZahtevController::class);
    Route::post('zahtev/statusi',[\App\Http\Controllers\ZahtevController::class,'statusi']);
    Route::put('zahtev/{zahtev}/odgovor',[\App\Http\Controllers\ZahtevController::class,'odgovor']);

    Route::post('/oprema/statistika',[\App\Http\Controllers\OpremaController::class,'statistika']);
    
    
    Route::post('me', [\App\Http\Controllers\AuthController::class, 'me']);
    Route::post('logout', [\App\Http\Controllers\API\JwtAuthController::class, 'logout']);
    Route::post('profile',[\App\Http\Controllers\API\JwtAuthController::class,'profile']);
});