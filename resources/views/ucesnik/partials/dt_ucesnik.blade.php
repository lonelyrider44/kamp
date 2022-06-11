{{$prezime}} {{$ime}} <br>

<small>
    {{ collect([$email, $telefon])->filter(function($item){return !empty($item);})->implode(',') }}
    {{-- @if(!empty($email)){{$email}}@endif @if(!empty($telefon)) @if(!empty($email)),@endif {{$telefon}}@endif  --}}
</small>