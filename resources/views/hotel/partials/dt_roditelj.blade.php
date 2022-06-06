{{$prezime_r}} {{$ime_r}} <br>

@if(!empty($email_r) || !empty($telefon_r))
<small>
    @if(!empty($email_r)){{$email_r}}@endif @if(!empty($telefon_r)) @if(!empty($email_r)),@endif {{$telefon_r}}@endif </small>
@endif