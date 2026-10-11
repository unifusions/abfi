import { Printer } from "lucide-react";
import OfficialReviewCard from "./official-review-card";
import PlayerReviewCard from "./player-review-card";
import RosterSignoff from "./roster-signoff";
import { Button } from "@/components/ui/button";

export default function RosterReview({ roster, roster_players, roster_officials }) {
    const { competition } = roster;

    return (
        <>

            {/* <pre>
            {JSON.stringify(competition, null, 2)}
        </pre> */}
            <section class="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/40">
                <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                    <div>

                        <div class="flex items-center gap-3">
                            <h1 class="font-headline text-2xl font-black text-primary tracking-tight">Roster Verification :
                                {roster?.name}, {roster?.organization?.state?.short_code}
                            </h1>
                            <span
                                class="bg-secondary-fixed text-on-secondary-fixed-variant text-[11px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider border border-secondary/20">
                                {roster?.status}
                            </span>
                        </div>
                        <p class="text-xs text-on-surface-variant mt-1 max-w-4xl leading-relaxed">
                            Review entire squad roster data, player portraits, and regulatory credentials on a single pane. Execute
                            full-roster sanctioning without individual player approval.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 min-w-[340px]">
                        {/* <div class="bg-surface-container-low border border-outline-variant rounded p-2 flex-1">
                            <label class="block text-[10px] font-bold uppercase tracking-wider text-outline mb-0.5">Active Delegation
                                Dossier</label>
                            <div class="  gap-2">
                                <div class="font-bold text-xs text-primary truncate">
                                    {roster?.organization?.name} ({competition?.name} {competition?.tournament?.category?.code} Division)
                                </div>
                                <span class="text-[11px] bg-primary text-on-primary px-1.5 py-0.5 rounded font-bold">{roster_players?.data?.length} + {roster_officials?.length}</span>
                            </div>
                        </div> */}
                        <Button  
                            size="xl"
                           variant="outline"
                                                   >
                            <Printer />
                            Print Official Verification Dossier
                        </Button>
                    </div>
                </div>

               
            </section>



            <section class="space-y-3 mt-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <h2 class="font-headline text-lg font-black uppercase tracking-tight text-primary">Registered Players</h2>
                        {/* <span
                            class="text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-bold">Simultaneous
                            Audit View</span> */}
                    </div>

                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
                    {roster_players?.data?.map((player) =>

                        <PlayerReviewCard key={player?.id} player={player} />
                    )}

                </div>
            </section>

            <section class="space-y-3 pt-2 pb-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <h2 class="font-headline text-lg font-black uppercase tracking-tight text-primary">Roster Officials
                          </h2>
                        
                    </div>
                    
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
                    <OfficialReviewCard />
                </div>
            </section>

{roster?.status !== 'approved' && 
    <RosterSignoff
    roster={roster?.id}
    officialCount={roster_officials?.data?.length}
    atheletsCount={roster_players?.data?.length}
/>
}
        

        </>
    )
}