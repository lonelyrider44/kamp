@extends('template.layouts.app')
@section('content')
<div class="container-fluid">
<div class="row">
        <div class="col-md-12 text-success">
            Smenu svaku posebno izlistati i da se za svaku smenu vidi dodatni paket <br>
            Sopstveni smeštaj chekira superadmin <br>
            Depozit ukoliko je plaćen stoji koliko je uplaćeno ukoliko nije uplaćeno da stoji NEMA UPLATE 
        </div>
    </div>
    <div class="row">

        <div class="col-md-12">
            <div class="card">

                <div class="card-header card-header-danger">
                    <h4 class="card-title">Pregled/Izmena prijave</h4>
                </div>

                <div class="card-body">
                    <form>

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Ime i prezime učesnika kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Datum rođenja</label>
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
                                <div class="form-group">
                                    <label class="bmd-label-floating">Pol</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Telefon učesnika kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Email učesnika kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Kamp</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Smene</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Dodatni paketi</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                          
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Sopstveni smeštaj</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Trener</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <h3>Prevoz</h3>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Prijava za prevoz</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">U oba pravca/Povratka/Dolazak</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Oprema</h3>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Veličina majice</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Veličina šorca</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Veličina duksa</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <h3>Plaćanje</h3>
                                <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Gratis</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Ukupno za placanje</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Depozit</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Dodatni paketi cena</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Ostalo za plaćanje</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="card-footer center">
                            <div class="stats">
                                <button type="submit" class="btn btn-danger  edit-button">SaČuvaj</button>
                                <button type="submit" class="btn  btn-tertiary edit-button">Odustani</button>
                            </div>
                        </div>



                        <div class="clearfix"></div>
                    </form>
                </div>

            </div>
        </div>

    </div>
</div>


@endsection