
const PoolName = ({ value, match }) => <div className="flex justify-between items-center mb-1">
    <span
        className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">
        {value}
    </span>
    {match && <span className="text-[9px] font-bold text-secondary">{match}</span>}
</div>

const Tbd = () => <p className="text-sm font-bold text-slate-400">TBD</p>
const SkeletonContainer = ({ children }) => <div className="bracket-connector space-y-1">
    {children}
</div>

const SkeletonItemContainer = ({ children }) => <div className="bg-surface-container-highest border-l-4  p-3 rounded-r shadow-sm bg-primary/5"> {children} </div>
export default function QuarterFinalSkeleton() {
    return (
        <>
            <SkeletonContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool A Winner" match="QF 1" />

                    <Tbd />
                </SkeletonItemContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool B Runner" />
                    <Tbd />
                </SkeletonItemContainer>


            </SkeletonContainer>

               <SkeletonContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool B Winner" match="QF 2" />

                    <Tbd />
                </SkeletonItemContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool A Runner" />
                    <Tbd />
                </SkeletonItemContainer>


            </SkeletonContainer>

               <SkeletonContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool C Winner" match="QF 3" />

                    <Tbd />
                </SkeletonItemContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool D Runner" />
                    <Tbd />
                </SkeletonItemContainer>


            </SkeletonContainer>

               <SkeletonContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool D Winner" match="QF 4" />

                    <Tbd />
                </SkeletonItemContainer>
                <SkeletonItemContainer>
                    <PoolName value="Pool C Runner" />
                    <Tbd />
                </SkeletonItemContainer>


            </SkeletonContainer>
        </>
    )
}