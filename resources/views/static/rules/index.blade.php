<x-web-layout>
    <pre>
   {{ print_r($categories) }}
    </pre>

    <section class="max-w-container">
        <div class="
      z-40 w-72 bg-stadium-gray 
      lg:bg-transparent lg:static lg:w-64 
      lg:block shrink-0 border-r border-outline-variant/30 
      lg:border-r 
      lg:pr-4 overflow-y-auto max-h-[calc(100vh-5rem)] top-20 transform -translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out p-4 lg:p-0"
            id="mobile-sidebar">
            <div class="flex items-center justify-between pb-3 lg:hidden border-b border-outline-variant/30 mb-4">
                <span class="font-headline-md text-base font-bold text-primary">Documentation Index</span>
                <button class="p-1 text-on-surface"
                    onclick="document.getElementById('mobile-sidebar').classList.add('-translate-x-full')">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
           @include('static.rules.sidebar')
                <!-- GETTING STARTED -->
                <div>
                    <h5
                        class="font-label-lg text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2.5 flex items-center justify-between">
                        <span>Getting Started</span>
                        <span class="material-symbols-outlined text-xs text-outline">expand_more</span>
                    </h5>
                    <ul class="space-y-1 pl-2 border-l border-outline-variant/40">
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary hover:border-l hover:border-primary -ml-[1px] transition-colors"
                                href="#">Overview &amp; Governance</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary hover:border-l hover:border-primary -ml-[1px] transition-colors"
                                href="#">Pitching &amp; Field Specs</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary hover:border-l hover:border-primary -ml-[1px] transition-colors"
                                href="#">Equipment Standards</a>
                        </li>
                    </ul>
                </div>
                <!-- OFFICIAL RULEBOOK (Active Focus) -->
                <div>
                    <h5
                        class="font-label-lg text-[11px] font-bold text-secondary uppercase tracking-wider mb-2.5 flex items-center justify-between">
                        <span class="flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Official Rulebook
                        </span>
                        <span class="material-symbols-outlined text-xs text-secondary">expand_more</span>
                    </h5>
                    <ul class="space-y-1 pl-2 border-l border-outline-variant/40">
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-1">1.0 Objectives of the Game</a>
                        </li>
                        <!-- ACTIVE ITEM -->
                        <li>
                            <a class="group flex items-center justify-between py-1.5 px-2.5 -ml-[9px] border-l-2 border-secondary bg-primary-container text-white font-semibold rounded-r shadow-xs"
                                href="#section-2">
                                <span>2.0 The Playing Field</span>
                                <span class="w-1.5 h-1.5 rounded-full bg-field-green"></span>
                            </a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-3">3.0 Equipment &amp; Uniforms</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-4">4.0 Game Preliminaries &amp; Lineups</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-5">5.0 Putting the Ball in Play</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-6">6.0 The Batter &amp; Strike Zone</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-7">7.0 The Runner &amp; Base Stealing</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-8">8.0 The Pitcher &amp; Balk Regulations</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-9">9.0 The Umpire: Authority &amp; Signals</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#section-10">10.0 Official Scoring Rules</a>
                        </li>
                    </ul>
                </div>
                <!-- FEDERATION REGULATIONS -->
                <div>
                    <h5
                        class="font-label-lg text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2.5 flex items-center justify-between">
                        <span>Federation Regulations</span>
                        <span class="material-symbols-outlined text-xs text-outline">expand_more</span>
                    </h5>
                    <ul class="space-y-1 pl-2 border-l border-outline-variant/40">
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">Anti-Doping Protocols (NADA/WADA)</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">State
                                Association Affiliation</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">Player
                                Eligibility &amp; Transfers</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">Disciplinary Code</a>
                        </li>
                    </ul>
                </div>
                <!-- RESOURCES -->
                <div>
                    <h5
                        class="font-label-lg text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2.5 flex items-center justify-between">
                        <span>Resources</span>
                        <span class="material-symbols-outlined text-xs text-outline">expand_more</span>
                    </h5>
                    <ul class="space-y-1 pl-2 border-l border-outline-variant/40">
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">Official
                                Downloadable Forms</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">WBSC
                                Alignment Manual</a>
                        </li>
                        <li>
                            <a class="block py-1 px-2 text-on-surface-variant hover:text-primary transition-colors"
                                href="#">Tournament Guidelines</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>


</x-web-layout>