import { replace } from "@/routes/rosters/replace"
import { Asterisk, CheckCircle, IdCard, Lock } from "lucide-react"

export default function RosterReplacementHistory({ replacements }) {
    return (
        <>


            {replacements.map((history) => {
                const { replacement, replacing } = history
                return (<div
                    class="bg-zinc-50 border-1 border-secondary/20  p-5 shadow-[0_16px_32px_rgba(25,28,29,0.04)] relative">
                    <div class="flex items-start justify-between gap-4 flex-wrap pb-4">
                        <div class="flex items-center gap-2">
                            <span
                                class="bg-secondary text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                <Asterisk />

                                Emergency Player Replacement
                            </span>
                            <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-mono font-bold">
                                RATIFIED {history?.created_at}
                            </span>
                        </div>
                        <div class="text-xs text-on-surface-variant flex items-center gap-1">
                            <Lock className="h-4 w-4 text-secondary" />

                            <span>Active on Official Play Sheet</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-5 items-center">
                        <div className="md:col-span-6 flex items-center gap-4">
                            <div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden shrink-0 relative">
                                <img className="w-full h-full object-cover"
                                    data-alt="Close-up professional athletic portrait of an Indian baseball pitcher in a navy blue baseball jersey against an understated stadium backdrop. Natural lighting highlights focused expression, athletic posture, clean sports editorial aesthetic consistent with national tournament federation branding."
                                    src={replacement?.profile_photo} />

                            </div>
                            <div>
                                <h3 class="font-headline text-lg font-black text-primary">{replacement?.name}</h3>
                                <p class="text-xs font-semibold text-secondary">
                                    {replacement.positions.join(', ')}
                                </p>
                                <p class="text-xs text-on-surface-variant mt-0.5">Age: {replacement.age} (DOB: {replacement?.details?.dob})</p>
                                <span class="inline-flex items-center gap-1 text-[11px] text-primary font-bold mt-1">
                                    <IdCard className="h-4 w-4" />
                                    {replacement?.player_code}
                                </span>
                            </div>
                        </div>
                        <div class="md:col-span-6 bg-zinc-100 p-3.5 rounded-lg text-xs space-y-1.5">
                            <div class="flex justify-between">
                                <span class="text-on-surface-variant">Replaces Player:</span>
                                <span class="font-bold text-secondary">{replacing?.name}</span>
                            </div>
                            {/* <div class="flex justify-between">
                  <span class="text-on-surface-variant">Sanction Docket:</span>
                  <span class="font-mono font-semibold text-primary">SEC-ROST-71-TN04</span>
                </div> */}
                            <div class="flex justify-between">
                                <span class="text-on-surface-variant">Position</span>
                                <span class="font-medium text-on-surface">Right / Right (Fastball, Slider)</span>
                            </div>
                            {/* <div class="flex justify-between">
                                <span class="text-on-surface-variant">Clearance Status:</span>
                                <span class="text-primary font-bold flex items-center gap-0.5">
                                    <CheckCircle className="h-4 w-4" />
                                    Endorsed
                                </span>
                            </div> */}
                        </div>
                        {/* <div class="md:col-span-3 flex flex-col gap-2">
                <button
                  class="w-full py-2 px-3 bg-primary text-on-primary text-xs font-semibold rounded hover:bg-primary-container transition-colors flex items-center justify-center gap-1">
                  <span class="material-symbols-outlined text-sm">description</span>
                  <span>View Sub Order</span>
                </button>
                <button
                  class="w-full py-2 px-3 bg-surface-container text-on-surface text-xs font-semibold rounded hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1">
                  <span class="material-symbols-outlined text-sm">badge</span>
                  <span>Player Bio Sheet</span>
                </button>
              </div> */}
                    </div>
                </div>
                )
            }
            )}
          

        </>
    )
}