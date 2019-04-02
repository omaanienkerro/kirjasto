<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/kirja/{id}', function () {
    return view('welcome');
});


Route::get('/Signin', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('welcome');
});

Route::get('/rek', function () {
    return view('welcome');
});

Route::get('/palauta', function () {
    return view('welcome');
});

Route::get('/niteet', function () {
    return view('welcome');
});

Route::get('/rekkaus', function () {
    return view('welcome');
});

Route::get('/lainaa/{id}', function () {
    return view('welcome');
});

Route::get('/UusiKirja', function () {
    return view('welcome');
});
