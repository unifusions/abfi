import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function PlayerIndexStats({ title, value, changeType, changeValue, variant = 'accent' }: { title: string, value: string, changeType: 'increase' | 'decrease', changeValue: string, variant : string }) {

    const changeColor = changeType === 'Increase' ? 'text-green-600 ' : 'text-red-600 bg-red-50';
    const ChangeIcon = changeType === 'Increase' ? TrendingUp : TrendingDown;
    return (
        <div className={cn("border-s-4",
            {" border-accent" : variant==="accent"} ,
            {" border-secondary" : variant==="secondary"} ,
             "bg-zinc-50 p-6 rounded-s-0 rounded-r-lg shadow-sm")}>
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">
                {title}</p>
            <p className="font-display text-3xl font-black text-primary">{value}</p>
          {
            changeValue && <div className={`flex w-fit  mt-2  rounded-lg text-xs ${changeColor} font-bold items-center gap-1`}>
            <ChangeIcon className="w-4 h-4" />
            <span className="font-label"> {changeValue} from last year   </span>

        </div>
          }  
        </div>
    )
}