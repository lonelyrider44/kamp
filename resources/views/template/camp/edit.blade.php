@extends('template.layouts.app')
@section('content')
<div class="container-fluid">
    <div class="row">

        <div class="col-md-12">
            <div class="card">

                <div class="card-header card-header-danger">
                    <h4 class="card-title">Izmeni/kreiraj kamp</h4>
                </div>

                <div class="card-body">
                    <form>

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Naziv kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Lokacija kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Smeštaj kampa</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" aria-label="Status">
                                        <option value="" selected disabled> Status</option>
                                        <option value="1">Aktivan</option>
                                        <option value="3">Završen</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-1">
                                <div class="form-group row">
                                    <label class="bmd-label-floating">Broj smena</label>
                                    <input class="form-control" type="number" name="quantity" min="1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 text-success">
                                Ovde sad u zavisnosti koliko smena se unese toliko input polja treba dodati naziv smene,
                                datum
                                od do, i broj dece u smeni.
                                Kada smena dostigne broj dece u smeni na prijava ucesnici ne vide tu smenu vise, ali
                                superadmin
                                moze da doda dete iako postoji ogranicenje
                            </div>
                            <div class="col-md-2">
                                <div class="form-group ">
                                    <label class="bmd-label-floating">Naziv smene</label>
                                    <input class="form-control" type="text">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group  ">
                                    <label class="bmd-label-floating">Trajanje od</label>
                                    <input class="form-control" name="date" type="text" onfocus="(this.type='date')"
                                        onfocusout="(this.type='text')">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group  ">
                                    <label class="bmd-label-floating">Trajanje do</label>
                                    <input class="form-control" name="date" type="text" onfocus="(this.type='date')"
                                        onfocusout="(this.type='text')">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group  ">
                                    <label class="bmd-label-floating">Broj prijava</label>

                                    <input class="form-control" type="number" name="quantity">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group  ">

                                    <select class="form-control" aria-label="Status">
                                        <option value="" selected disabled> Status</option>
                                        <option value="1">Aktivna</option>
                                        <option value="2">U toku</option>
                                        <option value="3">Zatvorena</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <h3>Cenovnik</h3>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6 ">
                                            <label>Cena kampa za stare učesnike po smeni</label>
                                        </div>
                                        <div class="col-md-2 pull-left">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">RSD</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>
                                        <div class="col-md-2 pull-left">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">€</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="row">
                                        <div class=" col-md-6">
                                            <label>Cena kampa za nove učesnike </label>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">RSD</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">€</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="row">
                                        <div class=" col-md-6">
                                            <label>Cena kampa svaku sledeću smenu</label>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">RSD</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">€</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Cena kampa sa sopstvenim smeštajem</label>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">RSD</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">€</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12 pull-left">
                                    <div class="row">
                                        <div class=" col-md-6">
                                            <label>Depozit</label>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">RSD</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group  ">
                                                <label class="bmd-label-floating">€</label>

                                                <input class="form-control" type="number" name="quantity">
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <h3>Dodatni paketi</h3>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Naziv dodatnog paketa</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-2 ">
                                        <div class="form-group  ">
                                            <label class="bmd-label-floating">RSD</label>

                                            <input class="form-control" type="number" name="quantity">
                                        </div>

                                    </div>
                                    <div class="col-md-2 ">
                                        <div class="form-group  ">
                                            <label class="bmd-label-floating">€</label>

                                            <input class="form-control" type="number" name="quantity">
                                        </div>

                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <button type="submit"
                                                class="btn btn-secondary  edit-secondary pull-left">Dodaj</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12  text-success">
                                        Ukoliko je edit stranica treba da prikaze vec unete dodatne pakete sa mogucnoscu
                                        izmene i
                                        brisanja
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