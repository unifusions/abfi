import AuditId from "@/components/ext/audit-log-id";
import ProcessingButton from "@/components/ext/processing-button";
import { approve } from "@/routes/rosters/review";
import { useForm } from "@inertiajs/react";
import { CheckCircle, Shield, XCircle } from "lucide-react";

export default function RosterSignoff({ roster, atheletsCount, officialCount }) {

    const { post, processing } = useForm();
  
    return (
        <section className="backdrop-blur-xs backdrop-grayscale  bg-surface-container-lowest p-6  space-y-6 sticky bottom-0 z-50  shadow-sm"
        >
            {/* <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-surface-container-high pb-4">
                <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-secondary block">Statutory Sanction
                        Gate</span>
                    <h3 className="font-headline text-xl font-black text-primary">Whole-Roster Statutory Audit Sign-Off</h3>
                    <p className="text-xs text-on-surface-variant">Both technical verification checkboxes and federation authority
                        credentials must be confirmed.</p>
                </div> */}
            {/* <AuditId id="ABFI-2026-15" /> */}
            {/* </div> */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                <div className="lg:col-span-7 space-y-3">
                    <label
                        className="flex items-start gap-3 p-2.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/40">
                        <input checked="" className="mt-0.5 h-4 w-4 rounded border-outline text-primary focus:ring-primary"
                            type="checkbox" />
                        <div className="text-xs">
                            <span className="font-bold text-on-surface">Photo liveness and clarity verified for all 18 squad
                                members</span>
                            <p className="text-[11px] text-on-surface-variant">Frontal headshots conform to ICAO / BFI biometric
                                standards with 0 pixelation.</p>
                        </div>
                    </label>
                    <label
                        className="flex items-start gap-3 p-2.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/40">
                        <input checked="" className="mt-0.5 h-4 w-4 rounded border-outline text-primary focus:ring-primary"
                            type="checkbox" />
                        <div className="text-xs">
                            <span className="font-bold text-on-surface">Age &amp; DOB verified against championship charter</span>
                            <p className="text-[11px] text-on-surface-variant">All 18 athletes meet the Senior Men cut-off (Min age 18
                                as of Jan 1, 2024).</p>
                        </div>
                    </label>
                    <label
                        className="flex items-start gap-3 p-2.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/40">
                        <input checked="" className="mt-0.5 h-4 w-4 rounded border-outline text-primary focus:ring-primary"
                            type="checkbox" />
                        <div className="text-xs">
                            <span className="font-bold text-on-surface">Anti-doping and medical fitness clearances on file</span>
                            <p className="text-[11px] text-on-surface-variant">State CMO fitness dossiers and signed NADA anti-doping
                                declarations confirmed.</p>
                        </div>
                    </label>
                    <label
                        className="flex items-start gap-3 p-2.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/40">
                        <input checked="" className="mt-0.5 h-4 w-4 rounded border-outline text-primary focus:ring-primary"
                            type="checkbox" />
                        <div className="text-xs">
                            <span className="font-bold text-on-surface">Coaching staff federation accreditation verified</span>
                            <p className="text-[11px] text-on-surface-variant">Four (4) accompanying officials possess active BFI Coach
                                and Liaison credentials.</p>
                        </div>
                    </label>
                </div>

                <div
                    className="lg:col-span-5 bg-primary-container text-on-primary p-5 rounded-lg border border-primary relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 opacity-10 text-on-primary select-none pointer-events-none">
                        <span className="material-symbols-outlined text-9xl">verified</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-emerald-400 text-lg">enhanced_encryption</span>
                        <span className="text-[10px] font-mono tracking-widest text-primary-fixed uppercase font-bold">Federation
                            Technical Authority Stamp</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between border-b border-primary/40 pb-1">
                            <span className="text-on-primary-container">Auditing Officer:</span>
                            <span className="font-bold text-on-primary">Dr. V. Ramanathan (CCO)</span>
                        </div>
                        <div className="flex justify-between border-b border-primary/40 pb-1">
                            <span className="text-on-primary-container">Designation:</span>
                            <span className="font-medium text-on-primary">National Compliance Director</span>
                        </div>
                        <div className="flex justify-between border-b border-primary/40 pb-1">
                            <span className="text-on-primary-container">Digital Hash:</span>
                            <span className="font-mono text-[10px] text-primary-fixed">9F8B-4421-E8A1-0091</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-on-primary-container">Timestamp:</span>
                            <span className="font-mono text-[11px] text-on-primary" id="live-timestamp">2024-10-24 16:42:18 IST</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-primary/50 flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-400 text-sm">lock</span>
                        <span className="text-[10px] text-on-primary-container">Biometric cryptographic audit log active. Action is
                            irreversible once ratified.</span>
                    </div>
                </div>
            </div> */}
 
            <div
                className=" flex flex-col sm:flex-row sm:flex-wrap items-center justify-end gap-3">

                <ProcessingButton
               size="xl"
               className=" px-5 py-3 flex-1  "
               variant="outline"
                >
                    <XCircle />
                    Disapprove Roster
                </ProcessingButton>
                <ProcessingButton
                    processing={processing} onClick={() => post(approve({ roster: roster }).url)}
                    size="xl" variant="secondary" className="px-8 py-3.5 text-sm flex-1  "  >
                    <CheckCircle />   Approve Entire Roster ({atheletsCount} Athletes + {officialCount}  Officials)
                </ProcessingButton>

            </div>
         
        </section>
    )
}