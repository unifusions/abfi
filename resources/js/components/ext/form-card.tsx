import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ComponentType, ReactNode, SVGProps } from "react";


type Props = {
    variant?: string,
    icon?: ComponentType<SVGProps<SVGSVGElement>> | ComponentType<{ className?: string }>;
    title?: string,
    className?: ClassValue,
    children?: ReactNode
}
export default function FormCard({ variant = "accent", icon: Icon, title, className, children }: Props) {
    return (
        <div

            className={cn('bg-zinc-25 space-y-6 relative  ', className,

            )}>

            <div className="flex items-center gap-4">
                <div className={cn("w-1 h-6",
                    {
                        'bg-accent': variant === "accent",
                        'bg-accent-secondary': variant === "accent-secondary"
                    }

                )}></div>
                {Icon && <Icon
                    className={cn('', {
                        'text-accent': variant === 'accent'
                    })}
                />}

                <h2 className="font-headline font-bold text-xl uppercase tracking-wider">{title}</h2>
            </div>


            {children}
        </div>
    )
}