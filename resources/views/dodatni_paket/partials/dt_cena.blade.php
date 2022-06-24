@if(!empty($iznos_rsd)) {{$iznos_rsd}} RSD @endif
@if(!empty($iznos_eur)) @if(!empty($iznos_rsd)) <br> @endif {{$iznos_eur ?? 0.00}} EUR @endif
