export default function PoolStandings({pools, poolStageCompleted}){
    return (

            <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-secondary rounded-full"></div>
                    <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight">Group Stage
                        Standings</h3>
                    <span
                        className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-bold text-on-surface-variant uppercase ml-2">Round
                        Robin Complete</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {pools?.map((pool) => {

                        return (
                            <div
                                className="bg-zinc-50  border border-outline-variant/20 overflow-hidden flex flex-col">
                                <div
                                    className="bg-primary text-white px-4 py-3 flex justify-between items-center">
                                    <span className="font-black text-xs uppercase tracking-widest">{pool?.name}</span>
                                    <span className="text-[10px] font-bold opacity-80">{pool.teams}  Teams</span>
                                </div>
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-surface-container-high">
                                        <tr>
                                            <th
                                                className="pl-4 pr-1 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter">
                                                Pos</th>
                                            <th
                                                className="px-2 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter">
                                                Team</th>
                                            <th
                                                className="px-1 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter text-center">
                                                GP  </th>
                                            <th
                                                className="px-1 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter text-center">
                                                L</th>
                                            <th
                                                className="px-1 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter text-center">
                                                D</th>

                                            <th
                                                className="pl-1 pr-4 py-2 text-[9px] font-black uppercase text-on-surface-variant tracking-tighter text-right">
                                                W</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/10">
                                        {pool?.standings?.map((standing, index) => <tr key={standing.id}
                                            className={index < 2 && "bg-green-50/50"}>

                                            <td className="pl-4 pr-1 py-3 text-xs font-black text-primary">{index + 1}</td>
                                            <td className="px-2 py-3">
                                                <p className="text-xs font-bold text-primary truncate w-24">{standing?.roster_name}


                                                </p>
                                                {standing.position <= 2 && <span
                                                    className="text-[8px] font-black text-secondary uppercase tracking-tighter">Qualified</span>}

                                            </td>
                                            <td className="px-1 py-3 text-xs text-center">{standing.played}</td>
                                            <td className="px-1 py-3 text-xs text-center">{standing.lost}</td>
                                            <td className="px-1 py-3 text-xs text-center">{standing.draw}</td>

                                            <td className="pl-1 pr-4 py-3 text-xs font-black text-primary text-right">{standing.won}</td>
                                        </tr>)}




                                    </tbody>
                                </table>
                            </div>
                        )
                    })}



                </div>
            </section>

    )
}