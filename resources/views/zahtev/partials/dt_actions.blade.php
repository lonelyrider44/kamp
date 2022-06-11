<button class="btn btn-info btn-link btn-sm btn-just-icon btnShowZahtev" data-id="{{$id}}"><i class="material-icons">visibility</i></button>
@if($status_id==1)
<button class="btn btn-link btn-sm btn-just-icon btnEditZahtev" data-id="{{$id}}"><i class="material-icons">edit</i></button>
<button class="btn btn-danger btn-link btn-sm btn-just-icon btnDeleteZahtev" data-id="{{$id}}"><i class="material-icons">delete</i></button>
@endif
