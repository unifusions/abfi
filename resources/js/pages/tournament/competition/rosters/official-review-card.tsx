export default function OfficialReviewCard({official}) {
    return (
        <div
        class="bg-surface-container-lowest p-4   border border-outline-variant/60 shadow-sm flex items-start gap-3">
        <img class="w-16 h-20 object-cover  border-2 border-primary bg-surface-container"
          data-alt="Headshot of veteran Indian baseball Head Coach in athletic navy team tracksuit, confident senior expression, high clarity lighting, neutral federation background."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_UAnt6VFBgT13F8Qg0eOPnqOuPjosqLesMR-3Pe9sdy3D0Z1FIPcldOfc6h8TJxYcEwnlgVLRgTwH4szopXWAY3z6mrWI_PIx9s-cWTHYpJZKyS6GaD6rAVfL_msSTVcuYvK81xhOudJdBq0hJfLFOZE9r7VRif8o7MtOMMkT-8Z6kuAO0HFtto1pcBq99vYNfeepNiFMIf9P5_sgKQYy1wJPQGYAE8tQ0kD2MYth" />
        <div class="min-w-0 flex-1">
          <span class="text-[10px] font-black uppercase tracking-wider text-secondary block">Head Coach</span>
          <h4 class="font-headline font-bold text-sm text-primary truncate">R. Jayaraman</h4>
          <p class="text-[10px] text-on-surface-variant mt-0.5">BFI License: <span
              class="font-mono font-bold text-primary">HC-LVLA-049</span></p>
          <p class="text-[10px] text-outline truncate">Phone: +91 98401 22910</p>
          <div class="mt-2 text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">verified</span> Certified Level A
          </div>
        </div>
      </div>
    )
}