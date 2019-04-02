<?php

use Illuminate\Http\Request;

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

Use App\Kirja;
use App\lainattava;
use App\laina;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('kirja', 'Api\KirjaController');

Route::resource('user','Api\UserController');
Route::resource('nide','Api\NideController');
Route::resource('laina','Api\LainausController');

/*Route::delete('/categories/{id}', CategoryController@destroy);*/

Route::delete('nide/{id}','Api\nideController@destroy');


Route::get('kirja/{id}', function($id) {
    return kirja::find($id);
});


Route::post('palauta/{id}', function($id) {
    $laina = laina::find($id);

    $laina->lainaplautettiin = now();

    $laina->save();
    return "ok1";
});


Route::get('testi/{id}', function($id) {
    return now();
});

Route::get('vapaanide/{id}', function($id) {
    $result = DB::select( DB::raw("SELECT id FROM homestead.lainattavat WHERE homestead.lainattavat.kuvausID = '$id' AND NOT EXISTS (SELECT * FROM homestead.lainat WHERE homestead.lainat.lainaplautettiin IS NULL AND homestead.lainattavat.id = homestead.lainat.lainattavaID)") );
    return $result;

});