import PageHeader from "@/components/ext/page-header";
import officials from "@/routes/officials";


const PlayerCard = ({ player }) => {
    return (
        <div
            className="bg-zinc-50 p-4 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
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
                <div className="text-xs font-medium text-on-surface-variant mt-0.5">{player?.positions.join(', ')}
                </div>
                <div className="mt-2 flex items-center gap-3">
                    <span className="text-[10px] text-on-surface-variant/60 font-black uppercase">Age:
                        {player.age}</span>
                    <span className="text-[10px] text-on-surface-variant/60 font-black uppercase">DOB:
                        {player.dob}</span>
                </div>
            </div>
        </div>
    )
}

export default function RosterShow({ roster, players, tournament,
    officials,
    competition, category }) {
    return (
        <>
            <PageHeader
                title={`Roster Detail : ${roster?.name}`}
                subText=""
            >
                <div
                    className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-tighter flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                   {roster.status}
                </div>
            </PageHeader>

            <div className="grid grid-cols-3 gap-6 mb-10">
                <div
                    className="bg-zinc-50 p-6 flex items-center justify-between relative overflow-hidden group ">
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
                    <div>
                        <p
                            class="text-[10px] font-label font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-1">
                            Total Players</p>
                        <h3 class="text-3xl  font-display font-extrabold  ">{players.data?.length}<span
                            class="text-zinc-500 text-xl">/{category.maximum_players}</span></h3>
                    </div>

                </div>
                <div
                    class="bg-surface-container-lowest p-6 flex items-center justify-between relative overflow-hidden group">
                    <div class="absolute left-0 top-0 h-full w-1 bg-secondary"></div>
                    <div>
                        <p
                            class="text-[10px] font-label font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-1">
                            Staff Count</p> 
                        <h3 class="text-3xl font-headline font-extrabold text-on-surface">{officials?.length >  0 ? officials?.length : 0 } <span
                            class="text-on-surface-variant/30 text-xl">/{category.maximum_officials}</span></h3>
                    </div>

                </div>

            </div>


            <div className="grid grid-cols-12 gap-8 items-start">

                <div className="col-span-8 space-y-6">


                    <div class="grid grid-cols-2 gap-4">



                        {players.data.map((player) => <PlayerCard key={player.id} player={player} />
                        )}





                    </div>
                </div>

                <div class="col-span-4 space-y-6">

                    <div class="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                        <h3
                            class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4">
                            Official Staff</h3>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <img src="https://placehold.co/60x60.jpg" />
                                
                                <div>
                                    <p class="font-headline font-bold text-sm text-on-surface leading-tight">Vikram
                                        Singh</p>
                                    <p class="text-[10px] font-label font-bold text-on-surface-variant/60 uppercase">
                                        Head Coach</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                              <img src="https://placehold.co/60x60.jpg" />
                                <div>
                                    <p class="font-headline font-bold text-sm text-on-surface leading-tight">Anjali
                                        Gupta</p>
                                    <p class="text-[10px] font-label font-bold text-on-surface-variant/60 uppercase">
                                        General Manager</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="bg-primary text-white p-6 rounded-lg relative overflow-hidden">
                       
                        <h3 class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-primary/60 mb-4">
                            Tournament Event</h3>
                        <div class="space-y-3 relative z-10">
                            <div>
                                <p class="text-on-primary/70 text-[10px] font-label uppercase">Competition</p>
                                <p class="font-headline font-bold text-base leading-tight">{tournament.name}</p>
                            </div>
                            <div class="flex justify-between items-end">
                                <div>
                                    <p class="text-on-primary/70 text-[10px] font-label uppercase">Division</p>
                                    <p class="font-headline font-bold text-sm">{category?.name} | {competition?.name}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-on-primary/70 text-[10px] font-label uppercase">Dates</p>
                                    <p class="font-headline font-bold text-sm">{tournament.starts_at} - {tournament.ends_at}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="bg-surface-container-low p-6 rounded-lg">
                        <h3
                            class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4">
                            Activity Log</h3>
                        <div class="space-y-4">
                            <div class="flex gap-3">
                                <div class="w-[1px] bg-outline-variant relative">
                                    <div class="absolute top-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-on-surface">Roster Finalized</p>
                                    <p class="text-[10px] text-on-surface-variant/60 font-medium">Jun 12, 2024 • 09:42
                                        AM</p>
                                    <p class="text-[10px] text-primary font-bold mt-1 uppercase">Authored by A. Deshmukh
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <div class="w-[1px] bg-outline-variant relative">
                                    <div class="absolute top-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-outline"></div>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-on-surface-variant">Player Eligibility Verified
                                    </p>
                                    <p class="text-[10px] text-on-surface-variant/60 font-medium">Jun 10, 2024 • 14:15
                                        PM</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}