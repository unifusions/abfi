export default function MatchFixtureItem({ order, home, away }) {
    return (

        <div
            class="bg-surface-container-low p-3   border-l-2 border-primary/40 flex flex-col gap-2">
            <div
                class="flex justify-between text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-tighter">
                <span>Match {order}</span>
                {/* <span>Jun 15 • 09:00 AM</span> */}
            </div>
            <div class="grid grid-cols-7  items-center justify-between">

                 
                    <div class="col-span-3 flex flex-col items-start ">
                        <span class="text-xs font-bold text-primary">{home}</span>
                        {/* <span
                                                    class="text-[10px] font-bold text-secondary uppercase tracking-tighter">Seed
                                                    #1</span> */}
                    </div>
                    <span class="text-xs text-gray-600 text-outline text-center">VS</span>
                    <div class="col-span-3  flex flex-col items-end ">
                        <span class="text-xs font-bold text-primary">{away}</span>

                    </div>
                </div>

             

        </div>
    )
}