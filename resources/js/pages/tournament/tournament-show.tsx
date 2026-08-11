import TournamentStatCard from "@/components/ext/tournament/tournament-stats-card";
import { dashboard } from "@/routes";
import { index } from "@/routes/tournaments";
import competition, { builder, generatePools } from "@/routes/tournaments/competition";
import { Head, Link } from "@inertiajs/react";
import { Calendar, CheckCircle, Info, MapPin } from "lucide-react";
import TournamentCompetitionStatus from "./competition/tournament-competition-status";

export default function TournamentShow({ tournament,
    rosters, competitions,
    approvedRosters,
    registered_rosters
}: { tournament: any, rosters: any, competitions: any }) {
    return (
        <>
            <Head title={tournament?.name} />
            <div className="flex justify-between items-end mb-6">
                <div className="flex flex-col items-start max-w-3xl">
                    <div>
                        <h1 className="text-5xl font-display font-black text-primary tracking-tighter leading-tight">{tournament?.name}</h1>

                    </div>
                    <div className="flex items-center gap-6">
                        <div className=" bg-blue-200  shrink-0 text-primary px-4 py-1 rounded-full flex items-center gap-2" >
                            {/* BelowPillIcon && <BelowPillIcon className="h-5" />  */}
                            <span
                                className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{tournament.status}</span>


                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Calendar className="h-5" />
                            {tournament?.starts_at} - {tournament?.ends_at}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium">
                            <MapPin className="h-5" />
                            {tournament?.venue?.name}
                        </div>

                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <TournamentCompetitionStatus competitions={competitions}
                        approvedRosters={approvedRosters}
                    />






                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <TournamentStatCard
                    label="Total Registered Rosters"
                    value={registered_rosters}
                    variant="accent"
                    description=""

                />

                <TournamentStatCard
                    label="Pending Payments" value=""
                    variant="accent-secondary"
                    description=""

                />

                <TournamentStatCard
                    label="Validated Entry" value=""

                    description=""

                />

            </div>

            <div className="grid grid-cols-2 gap-6">
{competitions.map((competition) => 
    <div>ds</div>
)}
                {Object.entries(rosters).map(([competition, roster]) =>
                    <div>
                        <div class="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                            <h3 class="font-headline font-bold text-primary uppercase tracking-tighter text-xl">
                                {competition}  Rosters ({roster?.data?.length})</h3>
                          
                        </div>

                        <div className="grid   md:grid-cols-4 divide-x divide-y divide-outline-variant/10">

                            {roster?.data?.map((r) =>
                                <Link href={r?.action?.route} className="p-4 hover:bg-zinc-100 transition-colors">

                                    <div
                                        className="w-12 h-12 bg-surface   mb-3 flex items-center justify-center text-primary-container font-black text-lg border border-outline-variant/20">
                                        {r?.state}</div>

                                    <p className="text-sm font-bold text-on-surface truncate">{r?.name}</p>
                                    <div className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest flex items-center gap-1 mt-1">
                                        {r?.status?.value === 'approved' && <CheckCircle className="w-4 h-4 text-green-500" />}
                                        {r?.status?.value === 'submitted' && <Info className="w-4 h-4 text-amber-500" />}
                                        {r?.status?.label}

                                    </div>

                                </Link>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

TournamentShow.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard()
        }
        ,
        {
            title: 'Tournaments',
            href: index(),
        },
        {
            title: 'Event Detail'
        }

    ],
}