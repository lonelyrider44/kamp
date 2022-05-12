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
Route::post('/prijava',[\App\Http\Controllers\PrijavaController::class,'store']);
Route::apiResource('velicina', \App\Http\Controllers\VelicinaController::class);
Route::apiResource('pol', \App\Http\Controllers\PolController::class);
// Route::post('refresh', [\App\Http\Controllers\AuthController::class, 'refresh']);


// Route::middleware(['assign.guard:roditelj','jwt.auth'])->group(function () {
Route::middleware(['assign.guard','jwt.auth'])->group(function () {
    Route::apiResource('kamp', \App\Http\Controllers\KampController::class);
    Route::apiResource('prijava', \App\Http\Controllers\PrijavaController::class)->except(['store']);
    Route::apiResource('ucesnik', \App\Http\Controllers\UcesnikController::class);
    Route::apiResource('lokacija', \App\Http\Controllers\MestoController::class);
    Route::apiResource('korisnik', \App\Http\Controllers\KorisnikController::class);
    Route::apiResource('uplata', \App\Http\Controllers\UplataController::class);
    
    
    Route::post('me', [\App\Http\Controllers\AuthController::class, 'me']);
    Route::post('logout', [\App\Http\Controllers\API\JwtAuthController::class, 'logout']);
    // Route::resource('racunari', \App\Http\Controllers\RacunarController::class);
    // // Route::post('klijenti',[\App\Http\Controllers\KlijentController::class,'index']);
    // Route::post('klijenti/search', [\App\Http\Controllers\KlijentController::class, 'search']);
    // Route::resource('klijenti', \App\Http\Controllers\KlijentController::class);
    // Route::post('domen/statistika',[\App\Http\Controllers\DomenController::class,'statistika']);
    // Route::resource('domeni', \App\Http\Controllers\DomenController::class);
    // Route::post('hosting/statistika',[\App\Http\Controllers\HostingController::class,'statistika']);
    // Route::resource('hosting', \App\Http\Controllers\HostingController::class);
    // Route::put('izvestaji/{izvestaj}/status', [\App\Http\Controllers\RiIzvestajController::class,'update_status'])->name('izvestaji.update_status');
    // Route::resource('izvestaji', \App\Http\Controllers\RiIzvestajController::class);
    // Route::resource('korisnici', \App\Http\Controllers\KorisnikController::class);
    // Route::resource('paketi', \App\Http\Controllers\PaketController::class);
    // Route::resource('statistika', \App\Http\Controllers\StatistikaController::class);

    Route::post('profile',[\App\Http\Controllers\API\JwtAuthController::class,'profile']);
    // Route::post('autocomplete/klijenti',[\App\Http\Controllers\KlijentController::class,'index']);
    // Route::post('autocomplete/pu',[\App\Http\Controllers\RiPruzeneUslugeController::class,'autocomplete']);
    // Route::post('autocomplete/materijal',[\App\Http\Controllers\RiUtrosenMaterijalController::class,'autocomplete']);
    // Route::post('autocomplete/radni-nalog',[\App\Http\Controllers\RiIzvestajController::class,'autocomplete']);
});