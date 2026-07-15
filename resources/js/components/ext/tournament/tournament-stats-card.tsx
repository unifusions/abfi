import { cn } from "@/lib/utils";

type Props = {
    label : string;
    value : string;
    description : string | null;
    variant : string | null;
    className: string | null;
}
export default function TournamentStatCard({label, value, description, variant , className } : Props) {
    
    return (
        <div className={cn("bg-zinc-50 p-8  border-l-4  shadow-sm", 
            {
                'border-primary' : variant==='accent',
                'border-secondary' : variant === 'accent-secondary'
                
            },
        className)}>
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
            <h3 className="font-display text-4xl font-black text-on-surface">{value}</h3>
            <p className="text-primary-fixed-dim text-[10px] mt-2">{description}</p>
        </div>
    )
}