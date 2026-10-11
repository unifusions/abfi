export default function RosterStatsBento() {
    return (
        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        <div
            class="bg-surface-container-lowest p-3.5 rounded border-l-4 border-primary shadow-sm flex items-center gap-3">
            <div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-xl" >badge</span>
            </div>
            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-outline">Total Athletes</div>
                <div class="text-lg font-black text-primary leading-tight">18 / 18 Compliant</div>
                <div class="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">check_circle</span> 100% Slot Quota Met
                </div>
            </div>
        </div>
        <div
            class="bg-surface-container-lowest p-3.5 rounded border-l-4 border-primary-container shadow-sm flex items-center gap-3">
            <div
                class="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
                <span class="material-symbols-outlined text-xl" >sports</span>
            </div>
            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-outline">Coaching Staff</div>
                <div class="text-lg font-black text-primary leading-tight">4 Accredited</div>
                <div class="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">check_circle</span> Level A/B Federation Cert
                </div>
            </div>
        </div>
        <div
            class="bg-surface-container-lowest p-3.5 rounded border-l-4 border-emerald-600 shadow-sm flex items-center gap-3">
            <div class="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center text-emerald-700">
                <span class="material-symbols-outlined text-xl"
                >calendar_month</span>
            </div>
            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-outline">Age &amp; Eligibility</div>
                <div class="text-lg font-black text-primary leading-tight">Senior National</div>
                <div class="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">check_circle</span> All DOB Cutoffs Passed
                </div>
            </div>
        </div>
        <div
            class="bg-surface-container-lowest p-3.5 rounded border-l-4 border-secondary shadow-sm flex items-center gap-3">
            <div class="w-10 h-10 rounded bg-secondary-fixed flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-xl" >face</span>
            </div>
            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-outline">Photo Liveness</div>
                <div class="text-lg font-black text-primary leading-tight">100% Verified</div>
                <div class="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">verified</span> Hi-Res Frontal Detected
                </div>
            </div>
        </div>
        <div
            class="bg-surface-container-lowest p-3.5 rounded border-l-4 border-primary shadow-sm flex items-center gap-3 col-span-2 md:col-span-1">
            <div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-xl"
                >fingerprint</span>
            </div>
            <div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-outline">Bio-Security &amp; ID</div>
                <div class="text-lg font-black text-primary leading-tight">18 Aadhaar / Passports</div>
                <div class="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-xs">lock</span> Central UIDAI Mask Matched
                </div>
            </div>
        </div>
    </section>
    )
}