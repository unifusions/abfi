import { certificatesForRoster } from "@/actions/App/Domains/Tournament/Competition/Controllers/CompetitionController";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import CardCertificateLink from "./card-certificate-link";
import { stateColors } from "@/lib/stateColors";

export default function ParticipantCard({ roster, tournament,competition, showCertificateLink  }) {
    return (
        <div className="bg-surface-container-lowest p-3  border space-y-4  ">

            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {roster?.name}
                    </h4>
                    <h6 className="text-sm font-semibold text-zinc-600">{roster?.organization?.name}</h6>
                </div>
                <div className={cn("w-6 h-6 p-5  text-sm rounded-sm overflow-hidden flex items-center font-bold justify-center", stateColors[roster?.organization?.state?.short_code])}>
                    {roster?.organization?.state?.short_code}
                </div>
            </div>


            <div className=" w-full flex justify-between items-center py-4 border-y border-outline-variant/20">

                <div className="text-left">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Players</p>
                    <p className="text-xl font-black text-primary">{roster?.players_count}</p>

                </div>

                <div className="text-right">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Officials</p>
                    <p className="text-xl font-black text-primary">{roster?.officials_count}</p>

                </div>
            </div>

           {showCertificateLink && <CardCertificateLink
                link={certificatesForRoster({
                    tournament: tournament ,
                    competition: competition ,
                    roster: roster?.id
                }).url}
                />}
              



            
        </div>
    )
}