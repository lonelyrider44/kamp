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
    Route::view('/dashboard_admin','dashboard_admin')->name('dashboard_admin');
    
    /* Kamp */
    Route::view('camp/list','camp/list')->name('camp/list');
    Route::view('camp/view','camp/view')->name('camp/view');
    Route::view('camp/edit','camp/edit')->name('camp/edit');
    
    /* Učesnici kampa */
    Route::view('participants/list','participants/list')->name('participants/list');
    Route::view('participants/view','participants/view')->name('participants/view');
    Route::view('participants/edit','participants/edit')->name('participants/edit');
    
    
    /* Svi korisnici */
    Route::view('users/list','users/list')->name('users/list');
    Route::view('users/view','users/view')->name('users/view');
    Route::view('users/edit','users/edit')->name('users/edit');
    
    /* Uplate */
    Route::view('payments/list','payments/list')->name('payments/list');
    Route::view('payments/view','payments/view')->name('payments/view');
    Route::view('payments/edit','payments/edit')->name('payments/edit');
    
    /* Prevoz */
    Route::view('transport/list','transport/list')->name('transport/list');
    Route::view('transport/view','transport/view')->name('transport/view');
    Route::view('transport/edit','transport/edit')->name('transport/edit');
    
    /* Oprema */
    Route::view('equipment/list','equipment/list')->name('equipment/list');
    Route::view('equipment/view','equipment/view')->name('equipment/view');
    Route::view('equipment/edit','equipment/edit')->name('equipment/edit');
    
    /* Hotel */
    Route::view('hotel/list','hotel/list')->name('hotel/list');
    Route::view('hotel/view','hotel/view')->name('hotel/view');
    Route::view('hotel/edit','hotel/edit')->name('hotel/edit');
    
    /* Izveštaji */
    Route::view('reports/list','reports/list')->name('reports/list');
    Route::view('reports/view','reports/view')->name('reports/view');
    Route::view('reports/edit','reports/edit')->name('reports/edit');

});

Route::view('/login','login')->name('login');
