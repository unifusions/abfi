import PageHeader from "@/components/ext/page-header";

export default function RosterBuilder({roster}){
    return (
        <>
        
    <PageHeader title={"Roster Assembly"} subText="Configure your tournament squad. Ensure all
                    participants meet the eligibility requirements for the tournament">

                          <div class="flex items-center gap-3">
                <div class="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-secondary"></div>
                    <span class="text-sm font-bold text-primary">Status: Draft</span>
                </div>
            </div>
        </PageHeader>
        {JSON.stringify(roster)}

         <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* <!-- Left Column: Directory & Search (7/12) --> */}
            <div class="lg:col-span-7 space-y-8">
                {/* <!-- Search & Filter Area --> */}
                <div class="bg-surface-container-lowest stadium-shadow rounded-xl p-1 flex items-center">
                    <div class="flex-1 flex items-center px-4">
                        <span class="material-symbols-outlined text-on-surface-variant">search</span>
                        <input class="w-full bg-transparent border-none focus:ring-0 text-sm font-medium py-4"
                            placeholder="Search player directory by name or ID..." type="text" />
                    </div>
                    <button
                        class="flex items-center gap-2 bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-lg text-sm font-bold transition-all m-1 shadow-sm active:scale-95">
                        <span class="material-symbols-outlined text-sm">person_add</span>
                        Register New Player
                    </button><button
                        class="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high px-4 py-3 rounded-lg text-sm font-bold transition-colors m-1">
                        <span class="material-symbols-outlined text-sm">tune</span> Filters
                    </button>
                </div>
                {/* <!-- Player Selection List --> */}
                <div class="space-y-3">
                    <div class="flex justify-between items-center px-2">
                        <h3 class="font-label text-xs uppercase tracking-widest font-bold text-secondary">Available
                            Players</h3>
                        <span class="text-xs text-on-surface-variant">Showing 148 players</span>
                    </div>
                    {/* <!-- Player Cards (Iterated) --> */}
                    <div class="grid grid-cols-1 gap-3">
                        {/* <!-- Player 1 --> */}
                        <div
                            class="group bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary">
                            <div class="flex items-center gap-4">
                                <div class="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant">
                                    <img class="h-full w-full object-cover"
                                        data-alt="Close up portrait of a young athletic baseball player in a team jersey, outdoors on a sunny day with a blurred stadium background, professional sports photography style, bright and energetic."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvRJkPtB-h5HAVH3HWFaTb8gObNOpmC660_fPktQdIGh9bZU9HDDiBWWnETjbMB3UNJ_EGD2laZ1TAKGML6x7nHFDFfq8svoZ-qt80bASur-CWCDtS7ny17sGa0LU9G_EC_umJ_eGsfZNVzI0lO3jacUzX-ERXb0fX8fyI2y99ORaRcEwTX5Gu051NvYLfjLGf8qwgQriJG__ogfge7awjypvH38h_vgmjmzITg3N8tSvGN0eOhY8o0TylEZLn3rcIZp4iieZoutmy" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Marcus Vance</h4>
                                    <p class="text-xs text-on-surface-variant font-medium">SS • Age 17 • #14</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="hidden md:flex flex-col items-end">
                                    <span
                                        class="text-[10px] uppercase font-bold text-on-surface-variant">Eligibility</span>
                                    <span class="text-xs font-bold text-primary flex items-center gap-1">
                                        <span class="material-symbols-outlined text-primary text-sm"
                                             >check_circle</span>
                                        Verified
                                    </span>
                                </div>
                                <button
                                    class="flex items-center gap-2 bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-lg text-sm font-bold transition-all m-1 shadow-sm active:scale-95">
                                    <span class="material-symbols-outlined text-sm">person_add</span>
                                    Register New Player
                                </button><button
                                    class="h-10 w-10 rounded-lg bg-primary-fixed hover:bg-primary text-primary hover:text-on-primary transition-colors flex items-center justify-center">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        
                        <div
                            class="group bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary">
                            <div class="flex items-center gap-4">
                                <div class="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant">
                                    <img class="h-full w-full object-cover"
                                        data-alt="Portrait of a determined young athlete, wearing a navy sports cap and jersey, soft late afternoon sunlight, high contrast sports editorial style, background of a baseball diamond."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdAgBxxw4Ysfbo3-C-Q1yHYzfnsS4PK_Ms6hEpWOY-Z8tScRXAtxuh6Xa-rSeCozxzoX-U3KRwyPqQbOI3-uU5xGmnXxVL_QC_9XNK3Jp2Z_huUVh1CJUGPiN-jr0D2x_KJh0aYGcxl8w5SPdwRuRGS0uF-sY1jLzHaZHi-l3d9-0m9Dh-yfDt0nppTxc9W66PbCsCEbx8vVFbEPYyGCGcCU16KeDbdv72YITQIqEwAxH_xu7eFZIVPXLS8MNxEDdkrR8F405teaym" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Julian Thorne</h4>
                                    <p class="text-xs text-on-surface-variant font-medium">P • Age 18 • #32</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="hidden md:flex flex-col items-end">
                                    <span
                                        class="text-[10px] uppercase font-bold text-on-surface-variant">Eligibility</span>
                                    <span class="text-xs font-bold text-primary flex items-center gap-1">
                                        <span class="material-symbols-outlined text-primary text-sm"
                                           >check_circle</span>
                                        Verified
                                    </span>
                                </div>
                                <button
                                    class="flex items-center gap-2 bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-lg text-sm font-bold transition-all m-1 shadow-sm active:scale-95">
                                    <span class="material-symbols-outlined text-sm">person_add</span>
                                    Register New Player
                                </button><button
                                    class="h-10 w-10 rounded-lg bg-primary-fixed hover:bg-primary text-primary hover:text-on-primary transition-colors flex items-center justify-center">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        <div
                            class="group bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary opacity-80">
                            <div class="flex items-center gap-4">
                                <div class="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant grayscale">
                                    <img class="h-full w-full object-cover"
                                        data-alt="Headshot of a teenage baseball player looking focused, wearing a baseball helmet, sharp studio lighting with deep shadows, high-resolution sports media style."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLk3dGIow5WHMPI75BNpfk_iTq8HT5ZnNtx2dzlTbx_Wt7gmFWB9E8IZnIgN9828CfiBDgazTPTIFDf4RoL5CW7uOQ7pFI_apK1KCX5A3DPhvO2ITNqYJfQVK4ov9ZUg-2kNUHv-ChZ1EORMZtouK9KqPVxVnxQm2iAqLhURAA59UEDBIdPr9EgEGGW16wKaop6QhHhvUvfozlP7FhmAyjWgMtBvhRgR6X5uC_lxEC0tJsxZMiVGQglLg4WH8lryG0JiMF5endUETf" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Leo Sterling</h4>
                                    <p class="text-xs text-on-surface-variant font-medium">C • Age 18 • #08</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="hidden md:flex flex-col items-end">
                                    <span class="text-[10px] uppercase font-bold text-secondary">Warning</span>
                                    <span class="text-xs font-bold text-secondary flex items-center gap-1">
                                        <span class="material-symbols-outlined text-secondary text-sm">error</span>
                                        Med-Cert Expired
                                    </span>
                                </div>
                                <button
                                    class="flex items-center gap-2 bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-lg text-sm font-bold transition-all m-1 shadow-sm active:scale-95">
                                    <span class="material-symbols-outlined text-sm">person_add</span>
                                    Register New Player
                                </button><button
                                    class="h-10 w-10 rounded-lg bg-surface-variant text-on-surface-variant cursor-not-allowed flex items-center justify-center">
                                    <span class="material-symbols-outlined">lock</span>
                                </button>
                            </div>
                        </div>
                         
                        <div
                            class="group bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary">
                            <div class="flex items-center gap-4">
                                <div class="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant">
                                    <img class="h-full w-full object-cover"
                                        data-alt="Professional athlete profile picture, young man with short hair in a baseball uniform, smiling, bright outdoor daylight, shallow depth of field, vibrant colors."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPQBiOuWKmJmXV2nYEo2O4j0k8BNro2vORHG8gWu0WuXsnCgVJZsdxyqmmTrvjPfqmykvrhIb8C48StEQuFX5Llo2oj4ZqZnioE3o-oJjhfClhtvNhvjVQ9pZ8Ti9jsdiIAo-MRlRwl3Sr2kdzbYHWBed4WdjkmNsGCZWQc45mGrb2c1MS37L2DLoSMPyNQvEcUZm3f4AM1w4RLukISbl0AwQpQGpAlxARkp4V2XbsReezokvN_eDs-Pya5EBbbRuNrUmiAWsb1_p" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Derek Chen</h4>
                                    <p class="text-xs text-on-surface-variant font-medium">1B • Age 17 • #22</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="hidden md:flex flex-col items-end">
                                    <span
                                        class="text-[10px] uppercase font-bold text-on-surface-variant">Eligibility</span>
                                    <span class="text-xs font-bold text-primary flex items-center gap-1">
                                        <span class="material-symbols-outlined text-primary text-sm"
                                             >check_circle</span>
                                        Verified
                                    </span>
                                </div>
                                <button
                                    class="flex items-center gap-2 bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-lg text-sm font-bold transition-all m-1 shadow-sm active:scale-95">
                                    <span class="material-symbols-outlined text-sm">person_add</span>
                                    Register New Player
                                </button><button
                                    class="h-10 w-10 rounded-lg bg-primary-fixed hover:bg-primary text-primary hover:text-on-primary transition-colors flex items-center justify-center">
                                    <span class="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Right Column: Roster Summary & Workflow (5/12) --> */}
            <div class="lg:col-span-5 space-y-6">
                {/* <!-- Roster Summary Card --> */}
                <div
                    class="bg-primary dark:bg-primary-container text-on-primary rounded-2xl p-6 stadium-shadow relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16">
                    </div>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="font-label text-xs uppercase tracking-[0.2em] font-bold opacity-70">Active
                                    Roster</h3>
                                <div class="flex items-baseline gap-2 mt-1">
                                    <span class="text-5xl font-black font-display tracking-tight">18</span>
                                    <span class="text-lg opacity-60 font-medium">/ 25 slots</span>
                                </div>
                            </div>
                            <button class="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                                <span class="material-symbols-outlined">file_download</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Pitchers</span>
                                <span class="text-xl font-bold">06</span>
                            </div>
                            <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Compliance</span>
                                <span class="text-xl font-bold">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Roster List (Mini) --> */}
                <div class="bg-surface-container-low rounded-2xl p-6">
                    <h3 class="font-bold text-primary mb-4 flex items-center justify-between">
                        Current Roster
                        <span
                            class="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full uppercase">Review</span>
                    </h3>
                    <div class="space-y-3 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                        {/* <!-- Roster Item 1 --> */}
                        <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <span class="font-bold text-xs text-on-surface-variant w-4">01</span>
                                <div>
                                    <p class="font-bold text-sm text-primary">Elias Rodriguez</p>
                                    <p class="text-[10px] font-medium text-on-surface-variant">SS • Age 18</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary text-sm"
                                     >verified</span>
                                <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                            </div>
                        </div>
                        {/* <!-- Roster Item 2 --> */}
                        <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <span class="font-bold text-xs text-on-surface-variant w-4">02</span>
                                <div>
                                    <p class="font-bold text-sm text-primary">Toby Marshall</p>
                                    <p class="text-[10px] font-medium text-on-surface-variant">P • Age 17</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary text-sm"
                             >verified</span>
                                <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                            </div>
                        </div>
                        {/* <!-- Roster Item 3 --> */}
                        <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <span class="font-bold text-xs text-on-surface-variant w-4">03</span>
                                <div>
                                    <p class="font-bold text-sm text-primary">Kaleb Vance</p>
                                    <p class="text-[10px] font-medium text-on-surface-variant">CF • Age 18</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-primary text-sm"
                                     >verified</span>
                                <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Finalize Roster Workflow --> */}
                <div class="bg-surface-container-lowest rounded-2xl p-6 stadium-shadow accent-stripe">
                    <h3 class="font-display font-black text-xl text-primary mb-4">Finalize Roster</h3>
                    <p class="text-sm text-on-surface-variant mb-6">Complete the following verification steps to submit
                        for official league review.</p>
                    <div class="space-y-4 mb-8">
                        <label class="flex items-center gap-3 group cursor-pointer">
                            <div
                                class="h-5 w-5 rounded border-2 border-outline flex items-center justify-center group-hover:border-primary transition-colors">
                                <input checked="" class="hidden" type="checkbox" />
                                <span class="material-symbols-outlined text-primary text-sm hidden">check</span>
                                 
                            </div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-primary">All Players Verified</p>
                                <p class="text-[10px] text-on-surface-variant">Confirmed with National Database</p>
                            </div>
                        </label>
                        <label class="flex items-center gap-3 group cursor-pointer">
                            <div
                                class="h-5 w-5 rounded border-2 border-outline flex items-center justify-center group-hover:border-primary transition-colors">
                                <span class="material-symbols-outlined text-primary text-sm">check</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-primary">Age Compliance Check</p>
                                <p class="text-[10px] text-on-surface-variant">Under 18 bracket confirmed</p>
                            </div>
                        </label>
                        <label class="flex items-center gap-3 group cursor-pointer">
                            <div
                                class="h-5 w-5 rounded border-2 border-outline flex items-center justify-center group-hover:border-primary transition-colors">
                                <span class="material-symbols-outlined text-primary text-sm hidden">check</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-primary">Medical Waivers Signed</p>
                                <p class="text-[10px] text-on-surface-variant">18 of 18 digital signatures found</p>
                            </div>
                        </label>
                    </div>
                    <button
                        class="w-full bg-secondary text-on-primary py-4 rounded-xl font-black text-sm uppercase tracking-widest stadium-shadow transition-transform active:scale-95 flex items-center justify-center gap-2">
                        Submit Roster
                        <span class="material-symbols-outlined">send</span>
                    </button>
                    <p class="text-[10px] text-center mt-4 text-on-surface-variant font-medium">Submission deadline: Aug
                        12, 2024 (11:59 PM EST)</p>
                </div>
            </div>
        </div>

        </>
    )
}