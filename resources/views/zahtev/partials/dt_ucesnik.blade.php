{{$prezime}} {{$ime}}<br>
{{-- <small>{{$email}}, {{$telefon}}</small> --}}
<small>{{ collect([$email, $telefon])->filter(function($item){ return !empty($item);})->implode(',')}}</small>