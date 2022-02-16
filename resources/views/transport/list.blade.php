@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
           Način dolaska moze bit samostalno ili prevozom, ukoliko je prevozom bira da li u oba pravca ili samo jedan (povratak tj dolazak)
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
       
                            <th>Ime i prezime učesnika kampa</th>
                            <th>Ime i prezime roditelja</th>
                            <th>email roditelja</th>
                            <th>Telefon roditelja</th>
                            <th>Način dolaska</th>
                            <th>Pravac</th>
                            <th>Naplata</th>
                            <th>Datum polaska</th>
                            <th>Datum odlaska</th>
                            <th>Akcija</th>
                   
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Petar Petrović</td>
                                <td>01.01.1990.</td>
                                <td>Valjevo</td>
                                <td>Zimski kamp Valjevo 2022</td>
                                <td>I smena<br>II smena</td>
                                <td>Vanja Grbić</td>
                                <td>Prisutan</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"><span class="material-icons"> edit</span></a>
                                    <a href=""> <span class="material-icons">delete</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Petar Petrović</td>
                                <td>01.01.1990.</td>
                                <td>Valjevo</td>
                                <td>Zimski kamp Valjevo 2022</td>
                                <td>I smena<br>II smena</td>
                                <td>Vanja Grbić</td>
                                <td>Otkazano</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"><span class="material-icons"> edit</span></a>
                                    <a href=""> <span class="material-icons">delete</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Petar Petrović</td>
                                <td>01.01.1990.</td>
                                <td>Valjevo</td>
                                <td>Zimski kamp Valjevo 2022</td>
                                <td>I smena<br>II smena</td>
                                <td>Vanja Grbić</td>
                                <td>Nije se pojavio</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"><span class="material-icons"> edit</span></a>
                                    <a href=""> <span class="material-icons">delete</span></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection