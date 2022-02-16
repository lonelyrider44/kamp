@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
            Napredna pretraga, Kamp(select box)<br>Smena(select box)<br> Prevoz (checkbox value DA/NE, ukoliko je da
            onda uslov Oba smera,Povratak, Dolayak)<br> Status(select box)<br> Grad (input)<br>
            Trener se dodeljuje kada dete prodje selektivni trening i mogu se dodati samo treneri koji imaju naloge, tj select box sa listom trenera, trenera može dodati koordinator  
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
                            <th>ID</th>
                            <th>Ime i prezime</th>
                            <th>Datum rođenja</th>
                            <th>Mesto prebivališta</th>
                            <th>Kamp</th>
                            <th>Smena</th>
                            <th>Trener</th>
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