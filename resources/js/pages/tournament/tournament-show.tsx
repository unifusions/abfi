import TournamentStatCard from "@/components/ext/tournament/tournament-stats-card";
import { dashboard } from "@/routes";
import { index } from "@/routes/tournaments";
import { Head } from "@inertiajs/react";
import { Calendar, MapPin } from "lucide-react";

export default function TournamentShow({ tournament, rosters }) {
    return (
        <>
            <Head title={tournament?.name} />
            <div className="flex justify-between items-end mb-6">
                <div className="flex flex-col items-start">
                    <div>
                        <h1 className="text-5xl font-display font-black text-primary tracking-tighter leading-tight">{tournament?.name}</h1>

                    </div>
                    <div className="flex items-center gap-6">
                        <div className=" bg-blue-200  shrink-0 text-primary px-4 py-1 rounded-full flex items-center gap-2" >
                            {/* BelowPillIcon && <BelowPillIcon className="h-5" />  */}
                            <span className=" uppercase text-xs">{tournament.status}</span>
                        </div>

                        <div className="flex items-center gap-3 ">
                            <Calendar />
                            {tournament?.starts_at} - {tournament?.ends_at}
                        </div>

                        <div className="flex items-center gap-3 ">
                            <MapPin />
                            {tournament?.venue?.name}
                        </div>

                    </div>
                </div>
                <div className="flex space-x-3">



                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <TournamentStatCard
                    label="Total Registered Rosters"
                    value={rosters?.length}
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

            <div className="grid grid-cols-2">
                {Object.entries(rosters).map(([competition, roster]) => 
                
                <div>
                    {competition}
                    {roster.map((r) => <pre>{JSON.stringify(r, null,2 )}</pre>)}
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