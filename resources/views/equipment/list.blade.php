@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
            Dete dobija opremu za svaku smenu<br>
            Ovde je potrebna i statistika, saljem ti excel tabelu kako izgleda.
            Oprema vrednosti su trener ili ucesnik
            Veli;ina trenerke nije obaveyno polje i imaju samo treneri
            Velicine su 6,8,10,12,14,16, S M L XL 2XL 3XL 4XL
            
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
                       Oprema
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead class="text-warning">
       
                            <th>Ime i prezime učesnika kampa</th>
                            <th>Veličina majice</th>
                            <th>Veličina sorca</th>
                            <th>Veličina duksa</th>
                            <th>Veličina trenerke</th>
                            <th>Oprema</th>
                            <th>Smena</th>
                            <th>Količina</th>
             
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