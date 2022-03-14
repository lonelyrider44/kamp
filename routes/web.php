<?php

use Illuminate\Support\Facades\Route;

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

Route::redirect('/','template/dashboard_admin');

Route::prefix('template')->middleware([])->group(function(){
    /* ADMIN */
    Route::view('/dashboard_admin','template.dashboard_admin')->name('dashboard_admin');
    
    /* Kamp */
    Route::view('camp/list','template.camp/list')->name('camp/list');
    Route::view('camp/view','template.camp/view')->name('camp/view');
    Route::view('camp/edit','template.camp/edit')->name('camp/edit');
    
    /* Učesnici kampa */
    Route::view('participants/list','template.participants/list')->name('participants/list');
    Route::view('participants/view','template.participants/view')->name('participants/view');
    Route::view('participants/edit','template.participants/edit')->name('participants/edit');
    
    
    /* Svi korisnici */
    Route::view('users/list','template.users/list')->name('users/list');
    Route::view('users/view','template.users/view')->name('users/view');
    Route::view('users/edit','template.users/edit')->name('users/edit');
    
    /* Uplate */
    Route::view('payments/list','template.payments/list')->name('payments/list');
    Route::view('payments/view','template.payments/view')->name('payments/view');
    Route::view('payments/edit','template.payments/edit')->name('payments/edit');
    
    /* Prevoz */
    Route::view('transport/list','template.transport/list')->name('transport/list');
    Route::view('transport/view','template.transport/view')->name('transport/view');
    Route::view('transport/edit','template.transport/edit')->name('transport/edit');
    
    /* Oprema */
    Route::view('equipment/list','template.equipment/list')->name('equipment/list');
    Route::view('equipment/view','template.equipment/view')->name('equipment/view');
    Route::view('equipment/edit','template.equipment/edit')->name('equipment/edit');
    
    /* Hotel */
    Route::view('hotel/list','template.hotel/list')->name('hotel/list');
    Route::view('hotel/view','template.hotel/view')->name('hotel/view');
    Route::view('hotel/edit','template.hotel/edit')->name('hotel/edit');
    
    /* Izveštaji */
    Route::view('reports/list','template.reports/list')->name('reports/list');
    Route::view('reports/view','template.reports/view')->name('reports/view');
    Route::view('reports/edit','template.reports/edit')->name('reports/edit');

    Route::view('login','template.login');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
