@if(!empty($uplate_rsd)) {{$ukupno_rsd - $uplate_rsd}} RSD @endif
@if(!empty($uplate_eur)) @if(!empty($uplate_rsd)) <br> @endif {{$ukupno_eur - ($uplate_eur ?? 0.00)}} EUR @endif