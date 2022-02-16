@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
         Ovo cekam parametre od lekara
                  </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-success">
        <span class="material-icons">visibility</span> Pregled prijave
        <span class="material-icons"> edit</span> Izmena prijave
        <span class="material-icons">delete</span> Obriši prijavu
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                        Spisak učesnika
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead class="text-warning">
               
                            <th>Broj sobe</th>
                            <th>Ime i prezime</th>
                            <th>Ime i prezime roditelja</th>
                            <th>EMAIL RODITELJA</th>
                            <th>Ime i prezime roditelja</th>
                            <th>TELEFON RODITELJA </th>
                            <th>Pol </th>
                            <th>JMBG broj pasosa</th>
                            <th>Mesto prebivališta, grad drzava</th>
                            <th>Napomena smestaj</th>
                            <th>Napomena hrana</th>
 
                            <th>Smena</th>
                         
                            <th>Status</th>
                            <th></th>
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