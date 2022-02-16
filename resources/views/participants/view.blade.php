@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 text-success">

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                    <div class="card-icon">
                        Pregled ucesnika kampa
                    </div>
                </div>

                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-tabs card-header-danger">
                                    <div class="nav-tabs-navigation">
                                        <div class="nav-tabs-wrapper">

                                            <ul class="nav nav-tabs" data-tabs="tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#podaci" data-toggle="tab">
                                                        Osnovni podaci
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link" href="#roditelj" data-toggle="tab">Podaci o
                                                        roditelju staratelju
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#karton" data-toggle="tab"> Lekarski
                                                        karton
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#izvestaji" data-toggle="tab"> Izveštaji
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#uplate" data-toggle="tab"> Uplate
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#prijave" data-toggle="tab"> Prijave
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#prijave" data-toggle="tab"> Zahtevi
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="podaci">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Ime učesnika kampa</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Prezime učesnika kampa</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">JMBG ili broj pasoša</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-check form-check-radio form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="radio"
                                                                name="inlineRadioOptions" id="inlineRadio1"
                                                                value="option1"> Muški
                                                            <span class="circle">
                                                                <span class="check"></span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-radio form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="radio"
                                                                name="inlineRadioOptions" id="inlineRadio2"
                                                                value="option2"> Ženski
                                                            <span class="circle">
                                                                <span class="check"></span>
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Adresa stanovanja</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Mesto stanovanja</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Država</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Sport</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Trenira od do godina</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Klub</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Pozicija</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                Treba staviti da moze da doda nov upis sporta
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Visina</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Težina</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="tab-pane" id="roditelj">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Ime</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Prezime</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Telefon (+381 6x
                                                            xxxxxx)</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Email</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="karton">
                                            <div class="row">
                                                Staviti da superadmin i doktor dodaju polja, parametri su promenljive
                                                prirode i zato mi treba ovo ali da kad unesu polaj kod sve dece budu
                                                prikazana PRIMER:
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Naziv polja</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Tip polja number,
                                                            text...</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Alergije</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Zdrastveni problem</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Terapije</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Napomena o ishrani</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="tab-pane" id="izvestaji">
                                            <div class="row">
                                                PDF prezimanje izvestaja
                                            </div>
                                            <div class="row">
                                                <table class="table table-hover">
                                                    <thead class="text-warning">

                                                        <th>Kamp</th>
                                                        <th>Godina</th>
                                                        <th>Naziv izvestaja</th>

                                                        <th>Akcija</th>

                                                    </thead>
                                                    <tbody>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="uplate">
                                            <div class="row">
                                               Evidencija uplata, mogucnost  da superadmin dodaje nove uplate
                                            </div>
                                            <div class="row">
                                                <table class="table table-hover">
                                                    <thead class="text-warning">

                                                        <th>Iznos</th>
                                                        <th>Datum evidentirane uplate</th>
                                                        <th>Akcija</th>
                                                        </thead>
                                                    <tbody>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="prijave">
                                            <div class="row">
                                               Evidencija svih prijava
                                            </div>
                                            <div class="row">
                                                <table class="table table-hover">
                                                    <thead class="text-warning">

                                                        <th>Kamp</th>
                                                        <th>Smena</th>
                                                        <th>Status(da li se pojavio....)</th>
                                                        <th>Akcija</th>
                                                        </thead>
                                                    <tbody>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="zahtevi">
                                            <div class="row">
                                               Zahtev za promenom smene
                                            </div>
                                            <div class="row">
                                                <table class="table table-hover">
                                                    <thead class="text-warning">

                                                        <th>Kamp</th>
                                                        <th>Prvobitna smena</th>
                                                        <th>Tražena smena</th>
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection