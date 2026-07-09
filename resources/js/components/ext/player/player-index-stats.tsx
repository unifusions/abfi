import { TrendingDown, TrendingUp } from "lucide-react";

export default function PlayerIndexStats({ title, value, changeType, changeValue }: { title: string, value: string, changeType: 'increase' | 'decrease', changeValue: string }) {

    const changeColor = changeType === 'increase' ? 'text-green-600 ' : 'text-red-600 bg-red-50';
    const ChangeIcon = changeType === 'increase' ? TrendingUp : TrendingDown;
    return (
        <div className="border-s-4 border-secondary bg-surface-container-lowest p-6 rounded-s-0 rounded-r-lg shadow-sm">
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">
                {title}</p>
            <p className="font-display text-3xl font-black text-primary">{value}</p>
            <div className={`flex w-fit  mt-2  rounded-lg text-xs ${changeColor} font-bold items-center gap-1`}>
                <ChangeIcon className="w-4 h-4" />
                <span className="font-label"> {changeValue}   </span>

            </div>
        </div>
    )
}