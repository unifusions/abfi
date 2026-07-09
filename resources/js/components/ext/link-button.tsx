import { Link } from "@inertiajs/react";

export default function LinkButton({ href, children, icon : Icon }: { href: string; children: React.ReactNode, icon?: React.ComponentType<{ className?: string }> }) { 
    return(
        <Link  className="bg-primary text-on-primary text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all" href={href}>
            {Icon && <Icon className="w-5 h-5"  />}
            {children}
        </Link>
    )
 }