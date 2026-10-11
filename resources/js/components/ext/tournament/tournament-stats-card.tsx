import { cn } from "@/lib/utils";

type Props = {
    label : string;
    value : string;
    description : string | null;
    variant : string | null;
    className: string | null;
}
export default function TournamentStatCard({label, value, description, variant = 'accent', className } : Props) {
    
    return (
        <div className={cn("bg-surface-container-lowest p-5   border-l-4   shadow-sm", 
            {
                'border-primary' : variant==='accent',
                'border-secondary' : variant === 'accent-secondary'
                
            },
        className)}>
            <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mb-1">{label}</p>
            <h3 className="font-headline text-2xl font-black text-primary">{value}</h3>
            <p className="text-on-surface-variant text-[11px] mt-2">{description}</p>
        </div>
    )
}