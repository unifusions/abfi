import TournamentStatCard from "@/components/ext/tournament/tournament-stats-card";
import { dashboard } from "@/routes";
import { index } from "@/routes/tournaments";

import { Head, Link } from "@inertiajs/react";
import { Calendar, CheckCircle, Info, MapPin } from "lucide-react";
import TournamentCompetitionStatus from "./competition/tournament-competition-status";
import { certificates, fixtures } from "@/routes/tournaments/competition";
import { useAuthorization } from "@/hooks/use-authorization";
import CompetitionStandings from "./competition-standings/competition-standings";
import FinalistsDisplay from "./competition-standings/finalists-display";

const RegisteredRosters = ({ rosters }) => <div>

    <div className="grid   md:grid-cols-4 divide-x divide-y divide-outline-variant/10">

        {rosters?.map((r) =>
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
export default function TournamentShow({ tournament,
    rosters, competitions,
    approvedRosters,
    registered_rosters, finalists
}: { tournament: any, rosters: any, competitions: any }) {

    const { can } = useAuthorization();
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

            {/* <div className="grid grid-cols-3 gap-6">
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

            </div> */}

            <div className="grid grid-cols-2 gap-6">
                {competitions.map((competition) => {

                    if (competition.phase)
                        return (<div className="pt-3">
                            <div className="flex justify-between  border-b pb-3">
                                <h3 className="font-headline font-bold text-primary capitalize tracking-tighter text-xl">{competition.name} Division</h3>

 
                                <div className="">
                                    {competition.phase === 'scheduled' &&  <Link
                                    
                                    className="bg-accent-secondary text-white text-sm p-2 font-bold"
                                    href={fixtures({
                                                        tournament: tournament?.id,
                                                        competition: competition?.id
                                                    })}> Update Results </Link>}
                                </div>

                            </div>




                            {competition.pools_generated_at ?
                                competition.pools_locked_at ?
                                    competition.fixture_generated_at ?
                                        competition.fixture_locked_at ?
                                           

                                                competition?.phase === 'process_certificate' ?
                                                    <FinalistsDisplay winner={competition?.winner}
                                                        runner={competition?.runner} thirdPlace={competition?.third_place}
                                                        thirdPlace2={competition?.third_place2} />
                                                    :
                                                      <CompetitionStandings standings={competition?.results} />
                                                    
                                            : 'Lock Fixture'
                                        : 'Generate Fixtures'
                                    : 'Lock Pools'
                                : <RegisteredRosters rosters={competition?.rosters?.data} />}



                        </div>)
                }

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