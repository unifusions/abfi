

<x-web-layout>
     <style type="text/tailwindcss">
        .prose h1 {
            @apply text-8xl font-bold tracking-tight text-primary mb-6;
        }
    </style>

 @include('static.rules.sidebar')
 
      <article class="prose prose-content">
 {!! $content !!}
      </article>
     
</x-web-layout>

