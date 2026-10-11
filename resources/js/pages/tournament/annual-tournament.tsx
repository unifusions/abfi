import { Button } from "@/components/ui/button";
import { CirclePlus, Lock, PersonStanding } from "lucide-react";

export default function AnnualTournament({ onSelect, tournamentType }) {
    const { competitions, available, label, tournament } = tournamentType;
    const genderString = competitions.map(item => item.gender.charAt(0).toUpperCase() + item.gender.slice(1)).join(' & ');
    return (
        <div
            className="relative bg-surface-container-lowest   border border-outline-variant/15 p-6 flex flex-col justify-between hover:border-outline-variant/30 transition-all duration-200 group shadow-md hover:shadow-xl">
            {/* <pre>
{JSON.stringify(tournament, null, 2)}
</pre> */}


            <div>
                <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-label font-bold uppercase tracking-widest text-primary">{label}</span>
 
                    {available && <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-label font-semibold bg-primary-container/80 text-primary-fixed border border-primary/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Available
                    </span>}

                </div>

                <h3
                    className="font-headline font-bold text-lg text-on-surface mt-3 leading-snug group-hover:text-primary transition-colors">
                    {tournament ? tournament?.name : <>{tournamentType?.name}{genderString}
</>}                 </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                    <span
                        className="inline-flex items-center gap-1.5 text-xs font-label px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant border border-outline-variant/15">
                        <PersonStanding className="text-primary w-4 h-4" />
                        Boys &amp; Girls (Dual Division)
                    </span>
                    {/* <span
                        className="text-xs font-label px-2 py-1 rounded-md bg-surface-container-low text-on-surface-variant/80 font-mono">
                        Year 2026
                    </span> */}
                </div>

                {/* <div className="mt-4 pt-3 border-t border-outline-variant/10 flex items-start gap-2">
                    <Lock className="mt-0.5 text-outline" />

                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                        System-generated edition based on 2025 (30th edition)
                    </p>
                </div> */}
            </div>

            <div className="mt-6 pt-2">
                {available ?

                    <Button
                        size="xl"
                        onClick={onSelect}
                    >
                        <CirclePlus />

                        Create Tournament
                    </Button> :
                   <p className="text-sm text-on-surface-variant leading-relaxed">
                        Tournament held on {tournament?.starts_at}
                    </p>

                }

            </div>
        </div>
    )
}