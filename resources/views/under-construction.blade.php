<x-web-layout>
      <!-- Sports Geometric Pitch Accent Lines / Atmosphere -->
    <div class="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
      <div class="w-[850px] h-[850px] border-4 border-primary rotate-45 rounded-xl"></div>
      <div class="w-[600px] h-[600px] border-2 border-secondary rotate-45 rounded-lg absolute"></div>
      <div class="w-[300px] h-[300px] border border-primary rotate-45 absolute"></div>
    </div>
    <div class="w-full max-w-container-max mx-auto z-10 flex flex-col items-center text-center">
      <!-- Status Pill Badge -->
      <div
        class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 mb-6 shadow-sm">
        <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span class="font-label-lg text-label-lg text-on-surface font-semibold tracking-wide">
          Section Under Development
        </span>
      </div>

      <!-- Focused Minimal Card -->
      <div
        class="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 sm:p-12 shadow-sm text-center flex flex-col items-center">
        <!-- Diamond Motif Icon Container -->
        <div class="relative mb-6">
          <div
            class="w-20 h-20 rounded-xl bg-stadium-gray border border-outline-variant/40 flex items-center justify-center relative">
            <div class="absolute -top-1.5 w-3 h-3 bg-secondary rotate-45 rounded-DEFAULT shadow-sm"></div>
            <div class="absolute -bottom-1.5 w-3.5 h-3.5 bg-primary rotate-45 rounded-DEFAULT shadow-sm"></div>
            <span class="material-symbols-outlined text-primary text-4xl">construction</span>
          </div>
        </div>

        <!-- Headline & Subtitle -->
        <h1 class="font-headline-lg text-headline-lg text-ink-black tracking-tight mb-3">
          This Section is Under Construction
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
          Official content, schedules, and documentation for this section are currently being prepared by the Amateur
          Baseball Federation of India for the upcoming season.
        </p>

        <!-- Streamlined Action CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <a href={{ route('home') }}
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-colors active:scale-95">
            <span class="material-symbols-outlined text-sm">home</span>
            <span>Back to Homepage</span>
          </a>
         
        </div>

        <!-- Discreet Contact Hint -->
        <div
          class="mt-8 pt-6 border-t border-outline-variant/20 w-full flex items-center justify-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant/70">
          <span>Need immediate assistance or information?</span>
          <a href="mailto:info@baseballindia.org" class="text-secondary hover:underline font-semibold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
</x-web-layout>