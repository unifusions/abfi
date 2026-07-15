import { Head } from "@inertiajs/react";
import { LucideIcon } from "lucide-react";

type Props = {
    title?: string;
    subText?: string;
    belowPill ?: string;
    belowPillIcon?: LucideIcon | null;
    children ?: React.ReactNode;
}
export default function PageHeader({ title, subText, belowPill, belowPillIcon : BelowPillIcon, children } : Props) {
    return (
        <>

            <Head title={title} />

            <div className="flex justify-between items-end mb-6">
                <div className="flex flex-col items-start">
                    <div>
                        <h1 className="text-5xl font-display font-black text-primary tracking-tighter leading-tight">{title}</h1>
                        <p className="text-slate-600 mt-1">{subText}</p>
                    </div>
                    <div>
                        {belowPill && <div className=" bg-secondary  shrink-0 text-white px-4 py-2 rounded-full flex items-center gap-2" >
                         {BelowPillIcon && <BelowPillIcon  className="h-5" />}
                           <span className=" uppercase text-xs">{belowPill}</span>
                        </div>}


                    </div>
                    </div>
                    <div className="flex space-x-3">
                        {children}

                    </div>
                </div>

            </>
            )
}