<?php

namespace App\Http\Controllers\Api;
use App\kirja;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KirjaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kirjat = kirja::with('tekija','kategoria','tyyppi')->get();

        return response()->json($kirjat);
    }


    public function show($id)
    {
        $kirjat = kirja::with('tekija','kategoria','tyyppi')->find($id);

        return response()->json($kirjat);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new kirja;

        $user->nimi = $request->rkirja["nimi"];
        $user->kuvaus = $request->rkirja["kuvaus"];
        $user->tekijaID = $request->rkirja["kirjailija"];
        $user->vuosi = $request->rkirja["vuosi"];
        $user->kategoriaID = $request->rkirja["Kategoria"];
        $user->tyyppiID = $request->rkirja["tyyppi"];
        $user->kuva = $request->rkirja["kuva"];
        $user->save();

        return 'OK';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show2($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
