import { Search } from "lucide-react";

export default function SitewideSearch() {
    return (
        <div className="relative w-96">
            
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
            
            <input
                className="w-full bg-zinc-100 border-none rounded-full pl-10 pr-4 py-2 text-sm 
                focus:ring-2 focus:ring-primary/20
                focus:bg-white placeholder:text-slate-600/60"
                placeholder="Search Players, Officials, etc., ..." type="text" />
        </div>

    )
}