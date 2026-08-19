import PageHeader from "@/components/ext/page-header";
import PoolStandings from "./pool-standings";
import Brackets from "./brackets";

export default function StandingsIndex({ pools, 
    poolStageCompleted, 
    standings, quarter_finals, semi_finals, finals }) {
    return (
        <>
            <PageHeader title="Competition Standings">
                <div class="flex items-center gap-3">
                    {/* <button
                        class="px-4 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg" data-icon="visibility">visibility</span>
                        View Group Fixtures
                    </button>
                    <button
                        class="flex items-center gap-2 bg-surface-container-high text-primary px-6 py-2.5 rounded-lg font-bold text-sm border border-outline-variant/50 hover:bg-surface-container-highest transition-colors">
                        <span class="material-symbols-outlined text-lg" data-icon="check_circle">check_circle</span>
                        Finalize Standings
                    </button>
                    <button
                        class="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                        <span class="material-symbols-outlined text-lg" data-icon="auto_awesome">auto_awesome</span>
                        Generate Knockout Bracket
                    </button> */}
                </div>
            </PageHeader>
            
            <PoolStandings pools={pools?.data} poolStageCompleted={poolStageCompleted}/>
            
            <Brackets
                quarter_finals={poolStageCompleted ? quarter_finals : null }
                semi_finals={poolStageCompleted ? semi_finals : null }
                finals={poolStageCompleted ? finals : null}
            />

        </>
    )
}