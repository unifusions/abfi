<x-web-layout>
    <x-slot:pageHeader>

    <x-slot:preTitle>
            Affiliates
        </x-slot:preTitle>
        

        <x-slot:title>Affiliate Directory</x-slot:title>
        <x-slot:heroDescription>
        Explore the official directory of state and union territory baseball associations recognized by the
                    Amateur Baseball Federation of India.
                </x-slot:heroDescription>


    </x-slot:pageHeader>
    <section class="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

    @foreach($associations as $association)
    <article
                    class="bg-surface border border-outline-variant/50 rounded-xl p-stack-md flex flex-col shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div
                        class="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors">
                    </div>
                    <div class="flex justify-between items-start mb-stack-sm">
                        <h3 class="font-headline-md text-headline-md text-on-surface">
                            {{ $association->name }}
                        </h3>
                        <span
                            class="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-xs font-bold tracking-wider uppercase">
                            
                        {{ $association->state?->region }}
                        </span>
                    </div>
                    <div class="text-sm text-on-surface-variant mb-stack-md flex items-start gap-1">
                        <span class="material-symbols-outlined text-[16px] mt-0.5">location_on</span>
                        <span>{{ $association->address_line_1 }}, {{ $association->address_line_2 }}, {{ $association?->state?->short_code }}</span>
                    </div>
                    <div
                        class="grid grid-cols-2 gap-4 mb-stack-md bg-stadium-gray p-3 rounded-lg border border-outline-variant/20">
                        <div>
                            <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">President
                            </p>
                            <p class="font-body-md text-body-md font-medium text-on-surface">{{ $association->president }}</p>
                        </div>
                        <div>
                            <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-1">Secretary
                            </p>
                            <p class="font-body-md text-body-md font-medium text-on-surface">{{$association->secretary}}</p>
                        </div>
                    </div>
                    <div class="mt-auto pt-4 border-t border-outline-variant/30 flex flex-col gap-2">
                        <a class="flex items-center gap-2 text-primary hover:text-primary-fixed-variant transition-colors font-label-lg text-label-lg"
                            href="tel:9435089530">
                            <span class="material-symbols-outlined text-[20px]">call</span>
                           {{ $association->phone }}
                        </a>
                        <a class="flex items-center gap-2 text-primary hover:text-primary-fixed-variant transition-colors font-label-lg text-label-lg truncate"
                            href="mailto:ashma5asm@yahoo.co.in">
                            <span class="material-symbols-outlined text-[20px]">mail</span>
                           {{ $association->email }}
                        </a>
                    </div>
                </article>

                @endforeach
    </div>
    </section>
</x-web-layout>