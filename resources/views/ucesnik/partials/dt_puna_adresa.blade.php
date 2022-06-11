{{$adresa}}<br>
{{-- <small>{{$grad}}, {{$drzava}}</small> --}}

<small>{{ collect([$grad, $drzava])->filter(function($item){ return !empty($item);})->implode(',')}}</small>