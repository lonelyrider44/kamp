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

// Route::middleware(['jwt.auth','jwt.role:admin'])->group(function () {
Route::middleware(['jwt.auth'])->group(function () {
    Route::post('kamp', [\App\Http\Controllers\KampController::class,'datatable']);
    Route::post('dodatni-paket', [\App\Http\Controllers\DodatniPaketController::class,'datatable']);
    Route::post('prijava', [\App\Http\Controllers\PrijavaController::class,'datatable']);
    Route::post('smena', [\App\Http\Controllers\SmenaController::class,'datatable']);
    Route::post('ucesnik', [\App\Http\Controllers\UcesnikController::class,'datatable']);
    Route::post('roditelj', [\App\Http\Controllers\RoditeljController::class,'datatable']);
    Route::post('korisnik', [\App\Http\Controllers\KorisnikController::class,'datatable']);
    Route::post('trener', [\App\Http\Controllers\TrenerController::class,'datatable']);
    Route::post('lekar', [\App\Http\Controllers\LekarController::class,'datatable']);
    Route::post('fizioterapeut', [\App\Http\Controllers\FizioterapeutController::class,'datatable']);
    Route::post('prevoznik', [\App\Http\Controllers\PrevoznikController::class,'datatable']);
    Route::post('oprema-user', [\App\Http\Controllers\OpremaUserController::class,'datatable']);
    Route::post('hotel-user', [\App\Http\Controllers\HotelUserController::class,'datatable']);
    Route::post('uplata', [\App\Http\Controllers\UplataController::class,'datatable']);
    Route::post('prevoz', [\App\Http\Controllers\PrevozController::class,'datatable']);
    Route::post('oprema', [\App\Http\Controllers\OpremaController::class,'datatable']);
    Route::post('oprema/ucesnici', [\App\Http\Controllers\OpremaController::class,'datatable_ucesnici']);
    Route::post('oprema/treneri', [\App\Http\Controllers\OpremaController::class,'datatable_treneri']);
    Route::post('hotel', [\App\Http\Controllers\HotelController::class,'datatable']);
    Route::post('izvestaj', [\App\Http\Controllers\IzvestajController::class,'datatable']);
    Route::post('zahtev', [\App\Http\Controllers\ZahtevController::class,'datatable']);
});