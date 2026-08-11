import { stateColors } from "@/lib/stateColors"
import { cn } from "@/lib/utils"

const RosterIcon = ({ state }) => (
    <div className={cn("flex h-8 items-center justify-center w-8 font-bold font-display text-xs rounded-md",
        stateColors[state])

    }>
        {state}
    </div>
)

const RosterContainer = ({ children }) => (
    <div className="col-span-4 flex flex-col items-center justify-center text-center ">
        {children}
    </div>
)
const RosterInfo = ({ name, association }) => (
    <div className="flex flex-col  ">
        <span className="text-xs font-bold text-primary uppercase mt-3 ">{
            name}</span>
        <p className="  text-center text-xs text-zinc-500    ">{association}</p>
    </div>
)
const RosterTeam = ({ roster }) => (<RosterContainer>
    <RosterIcon state={roster?.organization?.state?.short_code} />
    <RosterInfo name={roster?.name} association={roster?.organization?.name} />
</RosterContainer>)

export default function MatchFixtureItem({ order, home, away, round }) {
    return (

        <div
            className="bg-zinc-50 p-3     flex flex-col gap-2">
            <div
                className="w-full  text-[10px] text-center font-bold text-on-surface-variant/70 uppercase tracking-tighter">
                <span>Match {order}</span>

            </div>
            <div className="grid grid-cols-9  items-center justify-between">

                <RosterTeam roster={home} />



                <span class="text-xs text-gray-600 text-outline text-center">VS</span>
                <RosterTeam roster={away} />


            </div>



        </div>
    )
}