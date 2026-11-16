<x-web-layout>
    <style type="text/tailwindcss">
        .prose h1 {
            @apply font-headline-lg text-headline-lg font-bold text-primary tracking-tight;
        }
        .prose p{
            @apply mt-3 font-body-lg text-body-lg text-on-surface-variant leading-relaxed;
        }
        .prose blockquote{
            @apply my-6 p-4 rounded-xl bg-stadium-gray border-l-4 border-secondary rounded-none;
        }

        .prose blockquote p{
            @apply text-sm text-on-surface-variant leading-relaxed normal-case not-italic;
        }
    </style>


    <x-slot:pageHeader>
        <x-slot:title>{{ $title }}</x-slot:title>
    </x-slot:pageHeader>


    <div class="max-w-container-max mx-auto flex flex-row pt-6">
        @include('static.rules.sidebar')


        <div class="flex-1 min-w-0 py-2 max-w-4xl lg:px-4">


            <article class="prose prose-content">
                {!! $content !!}
            </article>
        </div>

    </div>



    

</x-web-layout>