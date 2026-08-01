import { Button } from "@/components/ui/button";
import { store } from "@/routes/rosters/rosterofficials";
import { router, useHttp } from "@inertiajs/react";
import { Minus, Plus, UserPlus } from "lucide-react";

export default function OfficialBuilder({ roster, officials, roster_officials }) {


   
    const deletePlayer = (officialId: string) => {
        // router.delete(
        //     (rosters.rosterplayers.destroy({
        //         roster: roster.id,
        //         rosterPlayer: playerId
        //     }).url),

        //     {
        //         preserveScroll: true,
        //         preserveState: true,
        //     }
        // );
    };

    const addOfficial = (officialId: string) => {
        router.post(
            (store({ roster: roster.id }).url),
            {
                roster: roster.id,
                official_id: officialId,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };


    return (
        <>
            <div className="space-y-3">
                <div className="flex justify-between items-center px-2">
                    <div>
                        <h3 className="font-label text-xs uppercase tracking-widest font-bold text-secondary">Available
                            Officials</h3>
                        <span className="text-xs text-on-surface-variant">Showing {officials?.length} players</span>
                    </div>
                    <div>
                        <Button

                            size="xl"
                            className="">
                            <UserPlus />
                            Add New Official


                        </Button>

                    </div>
                </div>


               
                <div className="grid grid-cols-1 gap-3">
 
                    {officials.map((official) => {

                        const inRoster = roster_officials?.data?.some(p => p.official_id === official.id);
                        const rosterOfficial = roster_officials?.data?.find(p => p.official_id === official.id);
                        return (<div
                            className="group bg-surface-container-lowest  p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant">
                                    <img className="h-full w-full object-cover"
                                        data-alt="Close up portrait of a young athletic baseball player in a team jersey, outdoors on a sunny day with a blurred stadium background, professional sports photography style, bright and energetic."
                                        src={official?.profile} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{official.name}</h4>
                                    <p className="text-xs  font-medium flex items-center gap-1.5">

                                        {official.type}


                                        • {official.code}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {inRoster ?

                                    <Button variant="destructive" size={"lg"}

                                    > <Minus /></Button>

                                    : <Button
                                        variant="outline"
                                        onClick={() => addOfficial(official.id)}
                                        className="rounded-none hover:bg-primary hover:text-white" size={"lg"}>
                                        <Plus />
                                    </Button>


                                }

                            </div>
                        </div>)
                    }
                    )}


                </div>
            </div>
        </>
    )
}