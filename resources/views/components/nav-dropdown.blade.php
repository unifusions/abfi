@props(['label' => '', 'active' => false])

@php
    $isActive = $active;
    $baseClasses = 'font-label-lg text-label-lg uppercase transition-colors flex items-center gap-1 cursor-pointer';
    $stateClasses = $isActive 
        ? 'text-on-primary font-bold border-b-2  border-secondary' 
        : 'text-on-primary/85 hover:text-on-primary';
@endphp

<div class="relative group">
    <button {{ $attributes->merge(['class' => "$baseClasses $stateClasses py-2"]) }}>
        <span>{{ $label }}</span>
        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>

    <div class="absolute top-full left-0 w-64 bg-surface-container-low rounded-lg shadow-2xl border border-outline-variant/20 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {{ $slot }}
    </div>
</div>