{{$prezime}} {{$ime}} <br>

@if(!empty($email) || !empty($telefon))
<small>
    @if(!empty($email)){{$email}}@endif @if(!empty($telefon)) @if(!empty($email)),@endif {{$telefon}}@endif </small>
@endif