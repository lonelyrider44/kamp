@if($gratis)
Gratis
@else

@if($opstina) na teret opštine @else
@if(!empty($depozit_rsd)) {{$depozit_rsd}} RSD @endif
@if(!empty($depozit_eur)) @if(!empty($depozit_rsd)) <br> @endif {{$depozit_eur ?? 0.00}} EUR @endif
@endif
@endif
