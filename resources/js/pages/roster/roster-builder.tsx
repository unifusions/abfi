import PageHeader from "@/components/ext/page-header";
import SearchInput from "@/components/ext/search-input";
import { Button } from "@/components/ui/button";
import rosters from "@/routes/rosters";
import { router } from "@inertiajs/react";
import { Minus, Plus, SendHorizonal, UserPlus } from "lucide-react";
import { useState } from "react";



export default function RosterBuilder({ roster,
    players,
    category, last_date, roster_players }) {

    const [playerSearch, setPlayerSearch] = useState('');

    const addPlayer = (playerId: string) => {
        router.post(
            (rosters.players.store().url),
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
            (rosters.players.destroy({
                rosterPlayer: playerId
            }).url),

            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };


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
            {/* {JSON.stringify(roster)} */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-0">
                {/* <!-- Left Column: Directory & Search (7/12) --> */}
                <div className="lg:col-span-7 space-y-8">

                    <div className="   flex items-center justify-between gap-3">
                        <SearchInput value={playerSearch} onChange={(e) => setPlayerSearch(e.target.value)}
                            placeholder="Search Player"
                        />
                        <Button
                            //    variant="primary"
                            size="xl"
                            className="">
                            <UserPlus />
                            Add New Player
                        </Button>
                    </div>
                    {/* <!-- Player Selection List --> */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center px-2">
                            <h3 className="font-label text-xs uppercase tracking-widest font-bold text-secondary">Available
                                Players</h3>
                            <span className="text-xs text-on-surface-variant">Showing {players?.data?.length} players</span>
                        </div>
                        {/* <!-- Player Cards (Iterated) --> */}
                        <div className="grid grid-cols-1 gap-3">

                            {players.data.map((player) => {

                                const inRoster = roster_players.some(p => p.player_id === player.id);
                                const rosterPlayer = roster_players.find(p => p.player_id === player.id);
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
                                            <p className="text-xs text-on-surface-variant font-medium">{player?.position} • Age {player.age} • {player.code}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {inRoster ?

                                            <Button onClick={() => deletePlayer(rosterPlayer.id)} variant="destructive"> <Minus /></Button>

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
                </div>
                {/* <!-- Right Column: Roster Summary & Workflow (5/12) --> */}
                <div className="lg:col-span-5 space-y-6">
                    {/* <!-- Roster Summary Card --> */}
                    <div
                        className="bg-primary text-white dark:bg-primary-container text-on-primary rounded-2xl p-6 stadium-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16">
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-[0.2em] font-bold opacity-70">Active
                                        Roster</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-5xl font-black font-display tracking-tight">{roster_players.length}</span>
                                        <span className="text-lg opacity-60 font-medium">/ {category.maximum_players} slots

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Pitchers</span>
                                    <span class="text-xl font-bold">06</span>
                                </div>
                                <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <span class="block text-[10px] uppercase font-bold opacity-60 mb-1">Officials</span>
                                    <span class="text-xl font-bold">02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Roster List (Mini) --> */}
                    <div class="bg-surface-container-low rounded-2xl p-6">
                        <h3 class="font-bold text-primary mb-4 flex items-center justify-between">
                            Current Roster
                            <span
                                class="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full uppercase">Review</span>
                        </h3>
                        <div class="space-y-3 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                            {/* <!-- Roster Item 1 --> */}
                            <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="font-bold text-xs text-on-surface-variant w-4">01</span>
                                    <div>
                                        <p class="font-bold text-sm text-primary">Elias Rodriguez</p>
                                        <p class="text-[10px] font-medium text-on-surface-variant">SS • Age 18</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary text-sm"
                                    >verified</span>
                                    <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                                </div>
                            </div>
                            {/* <!-- Roster Item 2 --> */}
                            <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="font-bold text-xs text-on-surface-variant w-4">02</span>
                                    <div>
                                        <p class="font-bold text-sm text-primary">Toby Marshall</p>
                                        <p class="text-[10px] font-medium text-on-surface-variant">P • Age 17</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary text-sm"
                                    >verified</span>
                                    <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                                </div>
                            </div>
                            {/* <!-- Roster Item 3 --> */}
                            <div class="bg-surface-container-lowest p-3 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="font-bold text-xs text-on-surface-variant w-4">03</span>
                                    <div>
                                        <p class="font-bold text-sm text-primary">Kaleb Vance</p>
                                        <p class="text-[10px] font-medium text-on-surface-variant">CF • Age 18</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="material-symbols-outlined text-primary text-sm"
                                    >verified</span>
                                    <button class="text-on-surface-variant hover:text-secondary"><span
                                        class="material-symbols-outlined text-lg">close</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Finalize Roster Workflow --> */}
                    <div className="bg-surface-container-lowest rounded-2xl p-6 stadium-shadow accent-stripe w-full">
                        <h3 className="font-display font-black text-xl text-primary mb-4">Finalize Roster</h3>
                        <p className="text-sm text-on-surface-variant mb-6">Complete the submission of roster                             for official league review.</p>
                        <Button
                            className="w-full"
                            variant="accentSecondary"
                            size={"xl"}
                        >
                            Submit Roster
                            <SendHorizonal />
                        </Button>
                        <p className="text-[10px] text-center mt-4 text-on-surface-variant font-medium">Submission deadline: {last_date}</p>
                    </div>
                </div>
            </div>

        </>
    )
}