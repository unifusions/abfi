<!DOCTYPE html>

<html class="scroll-smooth" lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Amateur Baseball Federation of India | Official Site</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&amp;family=Hanken+Grotesk:wght@400;500;600;700;900&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container": "#eeedf2",
                        "on-tertiary-fixed": "#001d34",
                        "primary-fixed": "#d8e2ff",
                        "surface": "#faf9fe",
                        "on-secondary-fixed-variant": "#92001b",
                        "error-container": "#ffdad6",
                        "outline-variant": "#c4c6d1",
                        "primary-container": "#022a5e",
                        "on-primary-fixed": "#001a41",
                        "on-error-container": "#93000a",
                        "secondary-fixed": "#ffdad8",
                        "ink-black": "#0A111F",
                        "tertiary-fixed": "#cfe5ff",
                        "inverse-on-surface": "#f1f0f5",
                        "surface-container-lowest": "#ffffff",
                        "surface-variant": "#e3e2e7",
                        "primary-fixed-dim": "#adc7ff",
                        "on-secondary-fixed": "#410007",
                        "on-primary": "#ffffff",
                        "on-error": "#ffffff",
                        "surface-container-high": "#e9e7ed",
                        "secondary-fixed-dim": "#ffb3b0",
                        "primary": "#001638",
                        "surface-container-highest": "#e3e2e7",
                        "on-secondary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-surface": "#1a1b1f",
                        "inverse-surface": "#2f3034",
                        "background": "#faf9fe",
                        "surface-dim": "#dad9de",
                        "on-primary-container": "#7693cd",
                        "surface-container-low": "#f4f3f8",
                        "outline": "#747780",
                        "on-surface-variant": "#43474f",
                        "tertiary-container": "#0e2e48",
                        "secondary-container": "#e22238",
                        "surface-bright": "#faf9fe",
                        "on-tertiary-container": "#7a96b5",
                        "stadium-gray": "#F8F9FA",
                        "on-background": "#1a1b1f",
                        "tertiary": "#00192d",
                        "inverse-primary": "#adc7ff",
                        "field-green": "#E1F5C4",
                        "on-secondary-container": "#fffbff",
                        "on-tertiary-fixed-variant": "#2c4964",
                        "secondary": "#bb0026",
                        "tertiary-fixed-dim": "#acc9ea",
                        "error": "#ba1a1a",
                        "on-primary-fixed-variant": "#27467b",
                        "surface-tint": "#415e94"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "section-padding": "80px",
                        "margin-mobile": "16px",
                        "stack-lg": "32px",
                        "container-max": "1280px",
                        "margin-desktop": "48px",
                        "stack-md": "16px",
                        "stack-sm": "8px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "headline-lg-mobile": ["IBM Plex Sans"],
                        "label-lg": ["Hanken Grotesk"],
                        "body-md": ["Hanken Grotesk"],
                        "display-lg": ["IBM Plex Sans"],
                        "label-sm": ["Hanken Grotesk"],
                        "headline-md": ["IBM Plex Sans"],
                        "headline-lg": ["IBM Plex Sans"],
                        "body-lg": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                        "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "display-lg": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
                    }
                },
            },
        }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }

        .hero-gradient {
            background: linear-gradient(to right, rgba(0, 22, 56, 0.9) 0%, rgba(0, 22, 56, 0.4) 100%);
        }

        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px -8px rgba(0, 22, 56, 0.15);
        }
    </style>
</head>

<body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
    <!-- TopNavBar -->
    <nav
        class="sticky top-0 z-50 bg-primary dark:bg-primary-container border-b border-outline-variant shadow-sm transition-all duration-300">
        <div class="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
            <div class="flex items-center gap-4">
                <img alt="ABFI Logo" class="h-20 w-auto"
                    src="/images/logo.png" />
                <span
                    class="font-headline-md text-headline-md font-bold text-on-primary dark:text-primary-fixed hidden md:block">Amateur
                    Baseball Federation of India</span>
            </div>
            <div class="hidden lg:flex items-center gap-6">
                <a class="font-label-lg text-label-lg text-on-primary border-b-2 border-secondary font-bold transition-opacity"
                    href="#">Home</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">About</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">Rules</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">Events</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">Schedule</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">Information</a>
                <a class="font-label-lg text-label-lg text-on-primary/80 hover:text-on-primary transition-colors"
                    href="#">Downloads</a>
            </div>
            <a
            hre="#"
                class="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-lg text-label-lg hover:scale-105 active:scale-95 transition-transform uppercase tracking-wider font-bold">
                Contact Us
</a>
        </div>
    </nav>
    <!-- Hero Section -->
    <section class="relative h-[600px] w-full overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('https://lh3.googleusercontent.com/aida/AP1WRLvYxEM4tiA5uGSLFkNXW5CplhDhv8456xd9Cx-8i-8uPJY2yZhDesObAtNKDqL_OEadgbCcBk4VSTf5eJs8ol30SNMbflkS-hoii6CkHyMxUJTypqStBxKSLBOT_ric9RHj03w_PEopuM-JYcfPRATcDOg0H12jX_6tyDgpWi_StJscjgV7oGnwM2ybS-ypymJUFv_ktg898dG43gBtLC63wsUGiAc5sghXpR91BrzZ3D3QrpbSg7f-sCo')">
        </div>
        <div class="absolute inset-0 hero-gradient"></div>
        <div
            class="relative z-10 h-full max-w-container-max mx-auto px-margin-desktop flex flex-col justify-center items-start text-on-primary">
            <span
                class="bg-secondary text-on-secondary px-4 py-1 font-label-lg text-label-lg rounded mb-6 inline-block">Nurturing
                Excellence Since 1983</span>
            <h1 class="font-display-lg text-display-lg mb-6 max-w-2xl leading-tight">Official Home of Indian Baseball
            </h1>
            <p class="font-body-lg text-body-lg max-w-xl mb-8 opacity-90">Governing and promoting the spirit of baseball
                across the Indian subcontinent through professional development and national championships.</p>
            <div class="flex gap-4">
                <button
                    class="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-lg text-label-lg font-bold hover:shadow-lg transition-shadow">Latest
                    Events</button>
                <button
                    class="border-2 border-on-primary text-on-primary px-8 py-3 rounded-full font-label-lg text-label-lg font-bold hover:bg-on-primary/10 transition-colors">Learn
                    Rules</button>
            </div>
        </div>
    </section>
    <!-- About & History Section (Bento Style) -->
    <section class="py-section-padding bg-surface-bright">
        <div class="max-w-container-max mx-auto px-margin-desktop">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <!-- Main History Card -->
                <div class="md:col-span-8 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30">
                    <h2 class="font-headline-lg text-headline-lg mb-6 text-primary flex items-center gap-3">
                        <span class="material-symbols-outlined text-4xl"
                            style="font-variation-settings: 'FILL' 1;">history</span>
                        About ABFI
                    </h2>
                    <div class="prose max-w-none text-on-surface-variant leading-relaxed font-body-md space-y-4">
                        <p>The Federation was established in December 1983 with an object to promote this game. On 11th
                            December 1983 some Baseball lovers from Delhi, Manjpur, Haryana, Gujarat, M.P and West
                            Bengal met at Rohtak (Haryana) and agreed to form a baseball federation to promote baseball
                            game through out the country.</p>
                        <p>The Baseball Leaders also agreed that the Federation should become a member of Asian baseball
                            Federation and International Baseball Association. 1984 Officially form ABFI along with
                            Tamilnadu, Karnataka, Andhra Pradesh and Punjab Baseball Aassociation.</p>
                    </div>
                    <button class="mt-8 flex items-center gap-2 text-primary font-bold hover:underline">
                        Read Full History <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                <!-- Side Links Sidebar -->
                <div class="md:col-span-4 space-y-gutter">
                    <div class="bg-primary text-on-primary p-8 rounded-xl">
                        <h3 class="font-headline-md text-headline-md mb-4">Quick Links</h3>
                        <ul class="space-y-3">
                            <li><a class="flex items-center justify-between py-2 border-b border-on-primary/20 hover:text-primary-fixed transition-colors"
                                    href="#"><span>General Election 2025-29</span> <span
                                        class="material-symbols-outlined text-sm">open_in_new</span></a></li>
                            <li><a class="flex items-center justify-between py-2 border-b border-on-primary/20 hover:text-primary-fixed transition-colors"
                                    href="#"><span>National Championships</span> <span
                                        class="material-symbols-outlined text-sm">trophy</span></a></li>
                            <li><a class="flex items-center justify-between py-2 border-b border-on-primary/20 hover:text-primary-fixed transition-colors"
                                    href="#"><span>Join a Team</span> <span
                                        class="material-symbols-outlined text-sm">group_add</span></a></li>
                            <li><a class="flex items-center justify-between py-2 hover:text-primary-fixed transition-colors"
                                    href="#"><span>Training Schedule</span> <span
                                        class="material-symbols-outlined text-sm">calendar_month</span></a></li>
                        </ul>
                    </div>
                    <div class="bg-tertiary text-on-tertiary p-8 rounded-xl flex items-center gap-4">
                        <span class="material-symbols-outlined text-5xl opacity-50">description</span>
                        <div>
                            <p class="font-label-sm text-label-sm uppercase tracking-widest opacity-70">Downloads</p>
                            <p class="font-headline-md text-headline-md">Official Forms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Knowledge Base Grid -->
    <section class="py-section-padding bg-stadium-gray border-y border-outline-variant/20">
        <div class="max-w-container-max mx-auto px-margin-desktop">
            <div class="text-center mb-16">
                <h2 class="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">The Diamond
                    Knowledge Base</h2>
                <div class="w-24 h-1.5 bg-secondary mx-auto mt-4"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                <!-- Baseball Basic -->
                <div
                    class="bg-white p-8 rounded-xl border border-outline-variant/30 card-hover transition-all text-center">
                    <div
                        class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-symbols-outlined text-3xl">menu_book</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2">Baseball Basic</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6">Master the fundamental concepts
                        and history of the game.</p>
                    <a class="inline-flex items-center gap-2 text-secondary font-bold uppercase text-label-lg group"
                        href="#">
                        Explore <span
                            class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                    </a>
                </div>
                <!-- Baseball Rules -->
                <div
                    class="bg-white p-8 rounded-xl border border-outline-variant/30 card-hover transition-all text-center">
                    <div
                        class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-symbols-outlined text-3xl">gavel</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2">Baseball Rules</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6">Official rulebooks, field
                        dimensions, and officiating guides.</p>
                    <a class="inline-flex items-center gap-2 text-secondary font-bold uppercase text-label-lg group"
                        href="#">
                        Explore <span
                            class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                    </a>
                </div>
                <!-- Baseball Glance -->
                <div
                    class="bg-white p-8 rounded-xl border border-outline-variant/30 card-hover transition-all text-center">
                    <div
                        class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-symbols-outlined text-3xl">public</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2">Baseball Glance</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6">A quick look at national
                        statistics and global rankings.</p>
                    <a class="inline-flex items-center gap-2 text-secondary font-bold uppercase text-label-lg group"
                        href="#">
                        Explore <span
                            class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                    </a>
                </div>
                <!-- Baseball Events -->
                <div
                    class="bg-white p-8 rounded-xl border border-outline-variant/30 card-hover transition-all text-center">
                    <div
                        class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-symbols-outlined text-3xl">sports_baseball</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2">Baseball Events</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6">Upcoming tournaments, trials, and
                        championships across India.</p>
                    <a class="inline-flex items-center gap-2 text-secondary font-bold uppercase text-label-lg group"
                        href="#">
                        Explore <span
                            class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Executive Committee -->
    <section class="py-section-padding bg-surface">
        <div class="max-w-container-max mx-auto px-margin-desktop">
            <div class="flex justify-between items-end mb-16">
                <div class="max-w-xl">
                    <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Executive Committee</h2>
                    <p class="font-body-lg text-body-lg text-on-surface-variant">Leading the growth of Indian baseball
                        with visionary leadership and dedicated governance.</p>
                </div>
                <div class="hidden md:block">
                    <span class="text-outline font-label-lg text-label-lg uppercase tracking-widest">Leadership
                        2024</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <!-- Member 1 -->
                <div class="group">
                    <div class="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-high relative">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Professional studio portrait of Mr. M N Krishnamurthy, President of ABFI, a middle-aged man with a authoritative and kind expression, wearing a professional dark suit against a clean studio background. Corporate photography style, high-end lighting with soft shadows, representing institutional trust and leadership for the Amateur Baseball Federation of India."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHROsXjZOw_pdn48VEexJi5EVd0www1v1jZDHYg5SfglABhvofzXuLKFXAi5UrXxJPfbF5cVinfTgn1TRV7WfOLAc2udpmI8dD1iJl9btvAj3cL06rH-hNmSCNDxREGkWXhgCgvrDBVYPcA9gu8rj7zJ4fImi3WsGaKPIVxWI2Bmg5CwUSM3qz_U6RhDkx58JprlG5MQ8OsgfpCI3ZLUsFbgKwhhhbbiQb8Qrgqy6WJEVG9c1HIdrLaQ" />
                        <div
                            class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <div class="text-center">
                        <h4 class="font-headline-md text-headline-md text-primary">Mr. M N Krishnamurthy</h4>
                        <p class="font-label-lg text-label-lg text-secondary uppercase font-bold tracking-widest mt-1">
                            President ABFI</p>
                    </div>
                </div>
                <!-- Member 2 -->
                <div class="group">
                    <div class="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-high relative">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Professional portrait of Mr. Harish Kumar, Secretary General of ABFI. A man in formal business attire with a focused and professional demeanor. The photo is taken in a modern office environment with professional lighting, clear focus on features, and a high-contrast corporate look mirroring the national sports federation's authority."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuMXrzn4UN6ABHku8Euyl4Q856dvVzlXSo9EyrhCP5OVjMfc9Z4WPqeY8-njpvElUXzWkt1UftTlXUncz0twEe7llemsyhp31-UVCSgqU3x_W0-s529ez_jS3cqPRBt0p_rpSF4ToGVWbA2AieIwAB5yh-l2JqTKzvhbPptP8LM-PvKbrNBq865TFSSETwHXfXQHe4hNMyQU7r2mV5KciA4Df7MZ5rrwbcO_eTE1bYQLcP4obSmjJ7Jg" />
                        <div
                            class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <div class="text-center">
                        <h4 class="font-headline-md text-headline-md text-primary">Mr. Harish Kumar</h4>
                        <p class="font-label-lg text-label-lg text-secondary uppercase font-bold tracking-widest mt-1">
                            Secretary General ABFI</p>
                    </div>
                </div>
                <!-- Member 3 -->
                <div class="group">
                    <div class="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-high relative">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Professional portrait of Dr. Dinesh Yadav, Treasurer of ABFI. A professional individual with a friendly but authoritative gaze, dressed in business casual attire suitable for a top-level sporting organization. High-quality editorial lighting with a neutral background that emphasizes clarity and professional integrity."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6JDGNScmVygMYNhl3PZRz0pwwEVObPMJ-jTMJrZDpEsakpxsx9cxTqCiY_MfvenXmRZEJcn6bAr_Ad5vmElt_LZC4uXNCeP_8V982TcGJs5wwS6UUTc9bSibmp_QnXMn09JroTQaIpNqB3eBsfvKch-vpLhXwKoRrCzsE5W6j-P55h5iU93sPrgrEcckyfgQD0fLvYOVnYnqYLAOywyh1hVT-VPqS44vxNDUJq-QjE-haOptLV01ZZQ" />
                        <div
                            class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <div class="text-center">
                        <h4 class="font-headline-md text-headline-md text-primary">Dr. Dinesh Yadav</h4>
                        <p class="font-label-lg text-label-lg text-secondary uppercase font-bold tracking-widest mt-1">
                            Treasurer ABFI</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer class="bg-tertiary dark:bg-tertiary-container text-on-tertiary pt-section-padding pb-8">
        <div class="max-w-container-max mx-auto px-margin-desktop">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
                <!-- Brand Info -->
                <div class="md:col-span-1">
                    <div class="font-headline-sm text-headline-sm font-black text-on-tertiary mb-6">ABFI</div>
                    <p class="font-body-md text-body-md opacity-70 mb-8">Dedicated to promoting, regulating and
                        developing baseball in India since 1983.</p>
                    <div class="flex gap-4">
                        <a class="w-10 h-10 rounded-full border border-on-tertiary/20 flex items-center justify-center hover:bg-secondary transition-colors"
                            href="#"><span class="material-symbols-outlined text-sm">qr_code_2</span></a>
                        <a class="w-10 h-10 rounded-full border border-on-tertiary/20 flex items-center justify-center hover:bg-secondary transition-colors"
                            href="#"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
                        <a class="w-10 h-10 rounded-full border border-on-tertiary/20 flex items-center justify-center hover:bg-secondary transition-colors"
                            href="#"><span class="material-symbols-outlined text-sm">share</span></a>
                    </div>
                </div>
                <!-- Navigation Links -->
                <div>
                    <h5 class="font-label-lg text-label-lg text-on-tertiary mb-6 font-bold uppercase">Federation</h5>
                    <ul class="space-y-3 font-body-md text-body-md opacity-70">
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">History</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Constitution</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Affiliated Units</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">RTI Information</a></li>
                    </ul>
                </div>
                <!-- Legal Links -->
                <div>
                    <h5 class="font-label-lg text-label-lg text-on-tertiary mb-6 font-bold uppercase">Quick Links</h5>
                    <ul class="space-y-3 font-body-md text-body-md opacity-70">
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Anti-Doping Rules</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Selection Process</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Privacy Policy</a></li>
                        <li><a class="hover:text-secondary-fixed transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <!-- Contact -->
                <div>
                    <h5 class="font-label-lg text-label-lg text-on-tertiary mb-6 font-bold uppercase">Contact Us</h5>
                    <div class="space-y-4 opacity-70 font-body-md text-body-md">
                        <p class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary">location_on</span>
                            B4/317B, Keshav Puram,<br />Delhi - 110035
                        </p>
                        <p class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary">call</span>
                            +91 88900 29024
                        </p>
                        <p class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary">mail</span>
                            abfi.secretary@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <!-- Copyright Area -->
            <div
                class="pt-8 border-t border-on-tertiary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p class="font-label-sm text-label-sm opacity-60">© 1983 - {{ now()->year }} Amateur Baseball Federation of India. All
                    Rights Reserved.</p>
                <div class="font-label-sm text-label-sm opacity-60">
                    For best results use Mozilla or Chrome browsers
                </div>
            </div>
        </div>
    </footer>
    <!-- FAB for quick contact -->
    <button
        class="fixed bottom-8 right-8 w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group">
        <span class="material-symbols-outlined text-3xl">mail</span>
        <span
            class="absolute right-full mr-4 bg-primary text-on-primary px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-label-lg">Contact
            Us</span>
    </button>
    <script>
        // Simple scroll interaction for navbar
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'bg-opacity-95', 'backdrop-blur-md');
                nav.classList.remove('py-4');
            } else {
                nav.classList.add('py-4');
                nav.classList.remove('py-2', 'bg-opacity-95', 'backdrop-blur-md');
            }
        });
    </script>
</body>

</html>