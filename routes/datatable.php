<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API DataTable Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['jwt.auth'])->group(function () {
    Route::post('kamp', [\App\Http\Controllers\KampController::class,'datatable']);
    Route::post('smena', [\App\Http\Controllers\SmenaController::class,'datatable']);
    Route::post('ucesnik', [\App\Http\Controllers\UcesnikController::class,'datatable']);
    Route::post('korisnik', [\App\Http\Controllers\KorisnikController::class,'datatable']);
    Route::post('uplata', [\App\Http\Controllers\UplataController::class,'datatable']);
    Route::post('prevoz', [\App\Http\Controllers\PrevozController::class,'datatable']);
    Route::post('oprema', [\App\Http\Controllers\OpremaController::class,'datatable']);
    Route::post('hotel', [\App\Http\Controllers\HotelController::class,'datatable']);
    Route::post('izvestaj', [\App\Http\Controllers\IzvestajController::class,'datatable']);
    Route::post('zahtev', [\App\Http\Controllers\ZahtevController::class,'datatable']);
});