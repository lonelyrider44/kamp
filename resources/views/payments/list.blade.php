@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
  Lista sve korisnike prijavljene za kampove, Uplatu ipisuje da li je gratis dal opstina placa ili koja suma je uplacena<br>
  Broj dece predstavlja da roditelj ima jedno ili vise dece jer drugo dete ne placa depozit i nekad placa manje <br>
  OVo vidi samo superadmin
         </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-success">
 
        <span class="material-icons"> edit</span> Dodati uplatu 
 
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                        Uplate
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead class="text-warning">
       
                            <th>Ime i prezime učesnika kampa</th>
                            <th>Ime i prezime roditelja</th>
                            <th>JMBG deteta</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Kamp</th>
                            <th>Smena</th>
                            <th>Broj dece</th>
                            <th>Uplata</th>
                            <th>Ostalo za placanje</th>
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