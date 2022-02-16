@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
            Korisnici mogu biti  superadmini, koordinatori, lekari, fizioterapeuti, treneri, hotel, prevoznik, oprema
         </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-success">
        <span class="material-icons">visibility</span> Pregled 
        <span class="material-icons"> edit</span> Izmena 
        <span class="material-icons">delete</span> Obriši 
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                        Spisak korisnika aplikacije
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead class="text-warning">
       
                            <th>Ime i prezime</th>
                            <th>Uloga</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Akcija</th>
                   
                        </thead>
                        <tbody>
                   

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection