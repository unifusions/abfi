 <nav aria-label="Documentation Sidebar" class="space-y-6 text-sm">

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
                                        <a href={{ $page['slug'] }}>
                                            {{ $page['title'] }}
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                        @endisset
                    </div>
                @endforeach
                </nav>
