
  <aside
      class="fixed inset-y-0 left-0 z-40 w-72 bg-stadium-gray lg:bg-transparent lg:static lg:w-64 lg:block shrink-0 border-r border-outline-variant/30 lg:border-r lg:pr-4 overflow-y-auto max-h-[calc(100vh-5rem)] top-20 transform -translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out p-4 lg:p-0"
      id="mobile-sidebar">
    
    
<nav aria-label="Rules Sidebar" class="space-y-6 text-sm">

    @foreach($categories as $category)
        <div>
            <h5
                class="font-label-lg text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2.5 flex items-center justify-between">
                <span>{{ $category['name'] }}</span>
                <span class="material-symbols-outlined text-xs text-outline">expand_more</span>
            </h5>
            @isset($category['pages'])
                <ul class="space-y-1 pl-2 border-l border-outline-variant/40">


                    @foreach($category['pages'] as $page)
                        <li>
                            <a href={{ $page['href'] }}>
                                {{ $page['title'] }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            @endisset
        </div>
    @endforeach
</nav>

</aside>