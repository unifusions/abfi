import PageHeader from "@/components/ext/page-header";
import SearchInput from "@/components/ext/search-input";
import { Button } from "@/components/ui/button";
import rosters from "@/routes/rosters";
import { router, useHttp } from "@inertiajs/react";
import { Minus, Plus, SendHorizonal, UserPlus, X } from "lucide-react";
import { useState } from "react";
import RosterPlayerCreateDialog from "./roster-player-create-dialog";
import { create } from "@/routes/rosters/rosters/players";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OfficialBuilder from "./builder/official-builder";
import RosterSSubmission from "./builder/roster-submission";




export default function RosterBuilder({ roster,
    players, officials, roster_officials,
    category, last_date, roster_players }) {

    const [playerSearch, setPlayerSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [params, setParams] = useState({});
    const { get } = useHttp({});
    const addPlayer = (playerId: string) => {
        router.post(
            (rosters.rosterplayers.store({ roster: roster.id }).url),
            {
                roster: roster.id,
                player_id: playerId,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const deletePlayer = (playerId: string) => {
        router.delete(
            (rosters.rosterplayers.destroy({
                roster: roster.id,
                rosterPlayer: playerId
            }).url),

            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    const handleAddPlayerDialog = () => {

        get(create({ roster: roster.id }).url, {
            onSuccess: (data) => {
                setParams(data);
                setOpen(true);
            }
        });


    }


    return (
        <>

            <PageHeader title={"Roster Assembly"} subText="Configure your tournament squad. Ensure all
                    participants meet the eligibility requirements for the tournament">

                <div class="flex items-center gap-3">
                    <div class="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-3">
                        <div class="h-2 w-2 rounded-full bg-secondary"></div>
                        <span class="text-sm font-bold text-primary">Status: {roster.status}</span>
                    </div>
                </div>
            </PageHeader>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-0">

                <div className="lg:col-span-7 space-y-8">

                    <div className="   flex items-center justify-between gap-3">
                        <SearchInput value={playerSearch} onChange={(e) => setPlayerSearch(e.target.value)}
                            placeholder="Search Player or Official"
                        />



                    </div>


                    <Tabs defaultValue="overview" className=" w-full">
                        <div className="  gap-6 border-b mb-3 ">
                            <TabsList className="">
                                <TabsTrigger value="players"  >Players</TabsTrigger>
                                <TabsTrigger value="officials" >Officials</TabsTrigger>

                            </TabsList>
                        </div>

                        <TabsContent value="players">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-2">
                                    <div>
                                        <h3 className="font-label text-xs uppercase tracking-widest font-bold text-secondary">Available
                                            Players</h3>
                                        <span className="text-xs text-on-surface-variant">Showing {players?.data?.length} players</span>
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() => handleAddPlayerDialog()}
                                            size="xl"
                                            className="">
                                            <UserPlus />
                                            Add New Player


                                        </Button>
                                        <RosterPlayerCreateDialog
                                            roster={roster.id}
                                            open={open} setOpen={setOpen} params={params} />
                                    </div>
                                </div>


                                {/* <!-- Player Cards (Iterated) --> */}
                                <div className="grid grid-cols-1 gap-3">

                                    {players.data.map((player) => {

                                        const inRoster = roster_players.data.some(p => p.player_id === player.id);
                                        const rosterPlayer = roster_players.data.find(p => p.player_id === player.id);
                                        return (<div
                                            className="group bg-surface-container-lowest  p-4 flex items-center justify-between transition-all hover:translate-x-1 hover:shadow-sm border-l-4 border-transparent hover:border-primary">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-lg overflow-hidden bg-surface-variant">
                                                    <img className="h-full w-full object-cover"
                                                        data-alt="Close up portrait of a young athletic baseball player in a team jersey, outdoors on a sunny day with a blurred stadium background, professional sports photography style, bright and energetic."
                                                        src={player.profile} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary">{player.name}</h4>
                                                    <p className="text-xs  font-medium flex items-center gap-1.5">


                                                        {player.position.map((position) =>
                                                            <div className="bg-indigo-100 text-indigo-600 p-1.5 font-bold rounded-md">{position}</div>
                                                        )}



                                                        • Age {player.age} • {player.code}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {inRoster ?

                                                    <Button onClick={() => deletePlayer(rosterPlayer.id)} variant="destructive" size={"lg"}

                                                    > <Minus /></Button>

                                                    : <Button onClick={() => addPlayer(player.id)}
                                                        variant="outline"
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
                        </TabsContent>

                        <TabsContent value="officials">
                            <OfficialBuilder officials={officials?.data} roster={roster} roster_officials={roster_officials} />
                        </TabsContent>
                    </Tabs>
                </div>

                {/* <!-- Right Column: Roster Summary & Workflow (5/12) --> */}
                <div className="lg:col-span-5  ">
                    {/* <!-- Roster Summary Card --> */}
                    <div
                        className="bg-primary text-white    rounded-top-2xl p-6 stadium-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16">
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <div className="w-full">
                                    <div className="flex items-center justify-between  ">
                                        <h3 className="pb-0   font-label text-xs uppercase  tracking-[0.2em]   mb-0 font-bold  ">
                                            Active Roster
                                        </h3>

                                        <span
                                            className="text-[10px] bg-accent-secondary text-white px-2 py-0.5 rounded-full uppercase  ">Review</span>

                                    </div>



                                    <div className="flex items-baseline gap-6 mt-1 ">
                                        <div className="flex items-baseline gap-2 mt-1"><span className="text-5xl font-black font-display tracking-tight">{roster_players.data.length}</span>
                                            <span className="text-lg opacity-60 font-medium uppercase">/ {category.maximum_players} players

                                            </span>
                                        </div>

                                        <div className="flex items-baseline gap-2 mt-1"><span className="text-5xl font-black font-display tracking-tight">{roster_officials.data.length}</span>
                                            <span className="text-lg opacity-60 font-medium uppercase">/ {category.maximum_officials} officials

                                            </span>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* <div class="grid grid-cols-2 gap-4 mb-4">
                                <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Pitchers</span>
                                    <span class="text-xl font-bold">06</span>
                                </div>
                                <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Officials</span>
                                    <span class="text-xl font-bold">02</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Roster List (Mini) --> */}
                    <div class="bg-zinc-100   p-6">


                        <div class="space-y-3  overflow-y-auto no-scrollbar pr-1">


                            {roster_players.data.length < 1 && <div className="text-zinc-400 text-xs">Add players from the search bar</div>}


                            {roster_players.data.map((player, index) =>
                                <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <span class="font-bold text-xs text-on-surface-variant w-4">
                                            {String((index + 1)).padStart(2, '0')}
                                        </span>
                                        <div>

                                            <p className="font-bold text-sm text-primary">{player?.name} </p>
                                            <p className="text-[10px] font-medium text-on-surface-variant">{player.position} • Age {player.age}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">


                                        <Button variant="destructive" onClick={() => deletePlayer(player.id)}>
                                            <X className="h-3" />
                                        </Button>
                                    </div>
                                </div>

                            )}


                        </div>
                        {roster_officials?.data?.length > 0 &&
                            <div className="space-y-3 border-t  overflow-y-auto no-scrollbar pr-1">
                                <p className="ps-3 pt-3 pb-0 mb-0 font-display tracking-widest text-sm font-bold uppercase"> roster officials</p>



                                {roster_officials.data.map((player, index) =>
                                    <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                                        <div class="flex items-center gap-3">

                                            <div>

                                                <p className="font-bold text-sm text-primary">{player?.name} </p>
                                                <p className="text-[10px] font-medium text-on-surface-variant">{player.code} </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">


                                            <Button variant="destructive" onClick={() => deletePlayer(player.id)}>
                                                <X className="h-3" />
                                            </Button>
                                        </div>
                                    </div>

                                )}


                            </div>
                        }

                    </div>
                    {/* <!-- Finalize Roster Workflow --> */}
                    <RosterSSubmission lastDate = {last_date} roster={roster}/>
                   
                </div>
            </div>

        </>
    )
}