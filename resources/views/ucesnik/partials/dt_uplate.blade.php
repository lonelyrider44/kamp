
@if(!empty($uplate_rsd)) {{$uplate_rsd}} RSD @endif
@if(!empty($uplate_eur)) @if(!empty($uplate_rsd)) <br> @endif {{$uplate_eur ?? 0.00}} EUR @endif
