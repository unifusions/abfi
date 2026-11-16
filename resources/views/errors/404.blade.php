<x-web-layout>
   <div class="w-full flex flex-col items-center text-center ">
      <!-- Graphic Treatment: Diamond & Baseball Strike Motif -->
      <div class="relative mb-6 mt-16">
        <!-- Big Watermark Behind -->
        <div
          class="absolute -top-16 left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-extrabold tracking-tighter watermark-text pointer-events-none select-none font-display-lg leading-none opacity-40">
          404
        </div>
        <!-- Central Diamond Emblem -->
        <div
          class="relative w-36 h-36 md:w-44 md:h-44 rounded-xl bg-stadium-gray border-2 border-outline-variant flex items-center justify-center shadow-lg rotate-45 group transition-transform hover:scale-105 duration-300">
          <!-- Inner Diamond Accent -->
          <div
            class="w-28 h-28 md:w-36 md:h-36 border border-dashed border-secondary/40 rounded-lg flex items-center justify-center bg-surface-container-lowest">
            <div class="-rotate-45 flex flex-col items-center justify-center">
              <span class="material-symbols-outlined text-secondary text-5xl md:text-6xl"
                style="font-variation-settings: 'FILL' 1;">
                sports_baseball
              </span>
              <span class="font-label-sm text-label-sm font-bold text-primary mt-1 tracking-widest uppercase">
                Foul Ball
              </span>
            </div>
          </div>
        </div>
        <!-- Dynamic Status Tag -->
        <div
          class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1.5 shadow-md border border-outline/20 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
          <span class="font-bold tracking-wider">CALL ON FIELD: OUT OF BOUNDS</span>
        </div>
      </div>
      <!-- Athletic Typography Heading -->
      <div class="max-w-2xl mt-4">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-sm text-label-sm">
          <span class="material-symbols-outlined text-sm">warning</span>
          <span>Inning Disrupted • Error Code 404</span>
        </div>
        <h1
          class="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-primary tracking-tight font-extrabold text-balance">
          Off the Basepath: Swing &amp; a Miss!
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl mx-auto leading-relaxed">
          The page you are looking for might have been moved, renamed, or is currently out of play in foul territory.
          Let's get you safely back to home plate.
        </p>
      </div>
      <!-- Action Button Group -->
      <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
        <!-- Return Home CTA -->
        <a class="bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg px-6 py-3.5 rounded-lg shadow-md transition-all flex items-center gap-2 font-bold group"
          href={{ route('home') }}>
          <span class="material-symbols-outlined text-xl group-hover:-translate-x-0.5 transition-transform">home</span>
          Return to Home Base
        </a>
        <!-- Explore Rules Outline -->
        
      </div>

      <div
      class="mt-12 mb-12 w-full max-w-3xl bg-stadium-gray border border-outline-variant/80 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-xl">contact_support</span>
        </div>
        <div>
          <h4 class="font-headline-md text-sm font-bold text-primary">Need Technical Assistance?</h4>
          <p class="font-body-md text-xs text-on-surface-variant">
            Believe this is an error? Contact the ABFI Technical Secretariat at
            <a class="text-secondary font-semibold hover:underline"
              href="mailto:info@baseballindia.org">info@baseballindia.org</a>
          </p>
        </div>
      </div>
      <a class="bg-primary text-on-primary font-label-sm text-label-sm px-4 py-2 rounded-lg hover:bg-primary-container transition-colors whitespace-nowrap"
        href="mailto:info@baseballindia.org">
        Report Broken Link
      </a>
    </div>
    </div>
    
    <!-- Help & Report Technical Notice -->
    
</x-web-layout>