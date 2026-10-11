

export default function PlayerReviewCard({ player }) {

    const { snapshot } = player;
    const maskedNumber = `XXXX-XXXX-${snapshot?.aadhar_no?.slice(-4)}`;

    return (
        <div
            className="bg-surface-container-lowest p-3.5    shadow-sm flex gap-3 hover:border-primary transition-colors relative">
            <div className="relative flex-shrink-0">
                <img className="w-20 h-24 object-cover   border-1 border-primary-container bg-surface-container"

                    src={player?.profile_photo} />
                {/* <span
            className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.2   shadow">#21</span> */}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-headline font-bold text-sm text-primary leading-snug truncate">{snapshot?.first_name} {snapshot?.middle_name} {snapshot?.last_name}</h3>
                        <p className="text-[11px] text-outline font-medium">S/O: {snapshot?.father_name}</p>
                    </div>
                    <span
                        className="text-[10px] bg-primary-fixed text-primary px-1.5 py-0.5   font-black tracking-wider uppercase">
                        {player?.position_names[0]}
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-2 text-[10px] bg-surface-container-low p-1.5  ">
                    <div><span className="text-outline block">DOB / Age</span><strong>{player?.dob} ({player?.age} Years) </strong></div>
                    <div><span className="text-outline block">Ht / Wt</span><strong>{snapshot?.height ?? 0} cms / {snapshot?.weight ?? 0}kgs</strong></div>
                    <div><span className="text-outline block">Blood</span><strong>{snapshot?.blood_group}</strong></div>
                </div>
                <div className="flex items-center justify-between mt-2 text-[10px] pt-1 border-t border-outline-variant/30">
                    <span className="font-mono text-on-surface-variant font-medium">Aadhar :
                        {maskedNumber}
                    </span>
                    {/* <span className="text-emerald-700 font-bold flex items-center gap-0.5"><span
                className="material-symbols-outlined text-[12px]">verified</span> CMO Fit</span> */}
                </div>
                <div className="text-[9px] text-outline truncate mt-0.5">Reg ID: {snapshot?.player_code}  </div>
            </div>
        </div>
    )
}