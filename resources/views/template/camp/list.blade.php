@extends('template.layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">
            Ukoliko se zavrsio kamp nemoguce ga je menjati samo pregled//<br>Kamp ima dva statusa Završen i Aktivan, samo superadmin moze da promeni status,kreira ili izmeni kamp
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                        Spisak kampova
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead class="text-warning">
                            <th>Red.br</th>
                            <th>Naziv kampa</th>
                            <th>Lokacija</th>
                            <th>Godina</th>
                            <th>Broj prijava</th>
                            <th>Status</th>
                            <th> </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sokobanja 2020</td>
                                <td>Sokobanja</td>
                                <td>2020</td>
                                <td>730/750</td>
                                <td>Završen</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"><span class="material-icons"> edit</span></a>
                                    <a href=""> <span class="material-icons">delete</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sokobanja 2020</td>
                                <td>Sokobanja</td>
                                <td>2020</td>
                                <td>730/750</td>
                                <td>Prijavljivanje</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"> <span class="material-icons"> edit</span></a>
                                    <a href=""> <span class="material-icons">delete</span></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sokobanja 2020</td>
                                <td>Sokobanja</td>
                                <td>2020</td>
                                <td>730/750</td>
                                <td>Prijavljivanje</td>
                                <td>
                                    <a href="#"> <span class="material-icons">visibility</span></a>
                                    <a href="#"> <span class="material-icons"> edit</span></a>
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