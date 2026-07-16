import { cn } from "@/lib/utils";

export default function FormCard({ variant = "accent", icon: Icon, title, className, children  }) {
    return (
        <div className={cn('p-8 relative border-l-4', className,
            { 'border-accent': variant === "accent",
                'border-accent-secondary' : variant==="accent-secondary"
             }
        )}>

            <div className="flex items-center gap-3 mb-8">
                {Icon && <Icon 
                    className = { cn('' , {
                        'text-accent' : variant==='accent'
                    })}
                />}
                 
                <h3 className="font-headline text-xl font-bold text-primary">{title}</h3>
            </div>

            {children}
        </div>
    )
}