export default function RosterPlayerCard({player}) {
    const {replacement} = player;
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

