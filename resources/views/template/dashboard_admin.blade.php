@extends('template.layouts.app')
@section('content')
<div class="row">
    <div class="col-md-3">
        <select class="form-control" aria-label="Izaberi kamp">
            <option value="" selected disabled> Izaberi kamp</option>
            <option value="1">Sokobanja 2021</option>
            <option value="2">Sokobanja 2022</option>
            <option value="3">Zlatibor 2022</option>

        </select>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                    Ukupno popunjenih mesta
                </div>
            </div>
            <div class="card-body row">
                <div class="card-category col-md-2">
                    250/750 dece prijavljenih
                </div>
                <div class="card-category col-md-2">
                    <span class="text-success"><i class="fa fa-long-arrow-up"></i> 3 </span>gratis<br>
                    <span class="text-success"><i class="fa fa-long-arrow-up"></i> 3 </span>donosi u kamp<br>
                    <span class="text-success"><i class="fa fa-long-arrow-up"></i> 3 </span>uplatilo<br>
                </div>

                <div class="card-category col-md-2">
                    <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 2</span> zabrane prijave<br>
                    <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 3 </span>otkazane smene<br>
                    <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 2</span> se nije pojavilo<br>

                </div>
            </div>

        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-primary card-header-icon">
                <div class="card-icon">
                    I smena
                </div>
                <h3 class="card-title">49/150

                </h3>
            </div>
            <div class="card-body">
                <div class="stats">
                    Devojčica:20<br>
                    Dečaka:29<br>
                    Individualni:10<br>
                    Rehab:10<br>
                    Video:10<br>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-2 col-half-offset col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                    II smena
                </div>
                <h3 class="card-title">49/150

                </h3>
            </div>
            <div class="card-body">
                <div class="stats">
                    Devojčica:20<br>
                    Dečaka:29<br>
                    Individualni:10<br>
                    Rehab:10<br>
                    Video:10<br>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-2 col-half-offset col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                    III smena
                </div>
                <h3 class="card-title">49/150

                </h3>
            </div>
            <div class="card-body">
                <div class="stats">
                    Devojčica:20<br>

                    Dečaka:29<br>
                    Individualni:10<br>
                    Rehab:10<br>
                    Video:10<br>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-2 col-half-offset col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                    IV smena
                </div>
                <h3 class="card-title">49/150

                </h3>
            </div>
            <div class="card-body">
                <div class="stats">
                    Devojčica:20<br>

                    Dečaka:29<br>
                    Individualni:10<br>
                    Rehab:10<br>
                    Video:10<br>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-2 col-half-offset col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                    V smena
                </div>
                <h3 class="card-title">49/150

                </h3>
            </div>
            <div class="card-body">
                <div class="stats">
                    Devojčica:20<br>

                    Dečaka:29<br>
                    Individualni:10<br>
                    Rehab:10<br>
                    Video:10<br>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-4 col-md-12">
        <div class="card card-chart">
            <div class="card-header card-header-danger">
                <h4 class="card-title">Opšta statistika</h4>

            </div>
            <div class="card-body">
                <div class="row">
                    <div class="card-category col-md-6">
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 10</span> prijava danas<br>
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55</span> prijava za prevoz<br>
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 155</span> smeštaja u hotelu<br>
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55</span> sopstveni smeštaj<br>
                    </div>
                    <div class="card-category col-md-6">
                        <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 4</span> kasne sa uplatom<br>
                        <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 4</span> povrat novca<br>
                        <span class="text-warning"><i class="fa fa-long-arrow-down"></i> 2</span> dobilo opremu umesto
                        povrata<br>
                    </div>

                </div>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">access_time</i> 250 dece prijavljenih
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-12">
        <div class="card">
            <div class="card-header card-header-warning">
                <h4 class="card-title">Statistika po državama</h4>

            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead class="text-warning">
                        <th>Red.br</th>
                        <th>Država</th>
                        <th>Broj prijavljenih</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Srbija</td>
                            <td>34</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>USA</td>
                            <td>77</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>BiH</td>
                            <td>22</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-12">
        <div class="card">
            <div class="card-header card-header-success">
                <h4 class="card-title">Statistika po klubovima</h4>

            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead class="text-warning">
                        <th>Red.br</th>
                        <th>Klub</th>
                        <th>Broj prijavljenih</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>OK Timok</td>
                            <td>34</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>OK Crvena Zvezda</td>
                            <td>77</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>OK Topličanin</td>
                            <td>22</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-info">
                <h4 class="card-title">Statistika po godištu i smenama</h4>

            </div>

            <div class="card-body">
                <div class="row">
                    <div class="card-category col-md-4">



                        <table class="table table-hover">
                            <thead class="text-warning">
                                <th>Godišta</th>
                                <th>I smena</th>
                                <th>II smena</th>
                                <th>III smena</th>
                                <th>IV smena</th>
                                <th>V smena</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2001</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>2002</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>
                                <tr>
                                    <td>2003</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Statistika po godištu i smenama DEVOJČICE</h4>

            </div>

            <div class="card-body">
                <div class="row">
                    <div class="card-category col-md-4">



                        <table class="table table-hover">
                            <thead class="text-warning">
                                <th>Godišta</th>
                                <th>I smena</th>
                                <th>II smena</th>
                                <th>III smena</th>
                                <th>IV smena</th>
                                <th>V smena</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2001</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>2002</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>
                                <tr>
                                    <td>2003</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-success">
                <h4 class="card-title">Statistika po godištu i smenama DEČACI</h4>

            </div>

            <div class="card-body">
                <div class="row">
                    <div class="card-category col-md-4">



                        <table class="table table-hover">
                            <thead class="text-warning">
                                <th>Godišta</th>
                                <th>I smena</th>
                                <th>II smena</th>
                                <th>III smena</th>
                                <th>IV smena</th>
                                <th>V smena</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2001</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>2002</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>
                                <tr>
                                    <td>2003</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>5</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header card-header-tabs card-header-danger">
                <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                        <span class="nav-tabs-title">Zahtevi za</span>
                        <ul class="nav nav-tabs" data-tabs="tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#smene" data-toggle="tab">
                                    promena smene
                                    <div class="ripple-container"></div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#povrat" data-toggle="tab">povrat novca
                                    <div class="ripple-container"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#uplate" data-toggle="tab">
                                    <div class="ripple-container"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="tab-content">
                    <div class="tab-pane active" id="smene">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Učesnik kampa Petar Petrović želi promenu smene iz I smene u II smenu</td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Učesnik kampa Jovan Cvijić je odustao od kampa</td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane" id="povrat">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Učesnik kampa Jovan Cvijić je izvršio promenu adrese</td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Učesnik kampa Jovan Cvijić je izvršio promenu veličine opreme</td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Učesnik kampa Jovan Cvijić je izvršio promenu napomene smeštaj/prevoz/oprema
                                    </td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane active" id="uplate">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Učesnik kampa Jovan Cvijić je izvršio dodao uplatnicu</td>
                                    <td class="td-actions text-right">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" value="" checked>
                                                <span class="form-check-sign">
                                                    <span class="check"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <button type="button" rel="tooltip" title="Remove"
                                            class="btn btn-danger btn-link btn-sm">
                                            <i class="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
@endsection