import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { cva, type VariantProps } from "class-variance-authority";


const buttonVariants = cva(
    "font-bold px-6 py-3  flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all",
    {
        variants : {
            variant : {
                default : "bg-primary text-white ",
                secondary : "bg-accent-secondary text-white",
                view : "shadow-none hover:bg-blue-500/20",
                ghost : "shadow-none hover:bg-indigo-500/20",
                destructive : "shadow-none text-destructive hover:bg-destructive/20"
            },

            size : {
                default : "h-12",
                xs : "h-8 px-2 py-1 text-xs"
            },
        },

     
        defaultVariants : {
            variant: "default",
            size : "default"
        },
    }
)

export default function LinkButton({
    variant = "default", size="default",
    href, children, className, icon: Icon, ...props }: { href: string; children: React.ReactNode, icon?: React.ComponentType<{ className?: string }> }) {
    return (
        <Link className={cn(
            buttonVariants({variant,size,  className})
        )} href={href}{...props}>
            {Icon && <Icon className={cn(
                {"h-5 w-5" : size === "default",
                "h-4 w-4" : size==="xs"
            }
            )} />}
            {children}
        </Link>
    )
}
