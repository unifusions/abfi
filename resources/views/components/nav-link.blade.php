@props(['href' => '#', 'active' => false])
@php
    $isActive = $active || request()->routeIs($active);
    $baseClasses = 'font-label-lg text-label-lg uppercase transition-colors';
    $stateClasses = $isActive 
        ? 'text-on-primary font-bold border-b-2  border-secondary ' 
        : 'text-on-primary/85 hover:text-on-primary';
@endphp

<a {{ $attributes->merge(['class' => "$baseClasses $stateClasses"]) }}
    href="{{ $href }}">
    {{ $label ?? $slot }}
</a>