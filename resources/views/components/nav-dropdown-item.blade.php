@props(['href' => '#', 'active' => ''])

@php
    $isActive = $active || request()->routeIs($active);
    $stateClasses = $isActive 
        ? 'bg-primary/20 text-primary font-semibold' 
        : 'text-on-surface hover:bg-primary/10';
@endphp

<a {{ $attributes->merge(['class' => "block px-6 py-3 font-label-lg transition-colors $stateClasses"]) }} href="{{ $href }}">
    {{ $slot }}  
</a>