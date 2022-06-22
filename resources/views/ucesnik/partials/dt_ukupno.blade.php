
@if($gratis)
Gratis
@else
@if(!empty($ukupno_rsd)) {{$ukupno_rsd}} RSD @endif
@if(!empty($ukupno_eur)) @if(!empty($ukupno_rsd)) <br> @endif {{$ukupno_eur ?? 0.00}} EUR @endif

@if($opstina) <br>na teret opštine @endif
@endif
