import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { CheckCircle, Info } from "lucide-react";
import { approve } from "@/routes/rosters/review";
export default function RosterReviewSimple(
    { roster, roster_players }
) {

    const { post } = useForm();
const {data} = roster_players;
    return (
        <>
            <PageHeader title="Roster Review & Verification" subText={roster?.name}>
                <div className="flex items-center max-w-sm">
                    <Button size="xl" className="w-fit" onClick={() => post(approve({ roster: roster.id }).url)} >Approve Roster</Button>
                    <Button size="xl"  className="w-fit">Disapprove Roster</Button>
                </div>
            </PageHeader>
          
<div className="grid grid-cols-3 gap-4 border-t py-4">
    {data?.map((player) => <div>
                <div
            className="bg-surface-container-low p-4 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
            <div
                className="w-16 h-16 rounded-lg bg-zinc-100 overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover"
                    src={player?.profile_photo} />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h4 className="font-headline font-bold text-on-surface">{player?.name}</h4>
                    {/* <span className="material-symbols-outlined text-primary text-lg"
                    >verified</span> */}
                </div>
                <div className="text-xs font-medium text-on-surface-variant mt-0.5">{player?.position_names?.join(', ')}
                </div>
                <div className="mt-2 flex items-center gap-3">
                    <span className="text-[10px] text-on-surface-variant/60 font-black uppercase">Age:
                        {player?.age}</span>
                    <span className="text-[10px] text-on-surface-variant/60 font-black uppercase">DOB:
                        {player?.dob}</span>
                </div>
            </div>

        
        </div>
        </div>
        )}
 
            </div>
        </>
    )
}