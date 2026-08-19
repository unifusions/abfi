import { show } from "@/routes/tournaments";
import { Link } from "@inertiajs/react";
import { ArrowRight, Calendar, Contact, MapPin } from "lucide-react";

type Props = {
    tournament:
    {
        id: string,

        name: string
        starts_at: string
        ends_at: string
        organization: string
        venue: string
    }

}
export default function ActiveTournament({ tournament }: Props) {

    const { competitions } = tournament;
    return (
        <Link
            href={show(tournament?.id)}
            className="group bg-zinc-50   overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                <img className="w-full h-full object-cover" data-alt="High-action wide angle shot of a pristine professional baseball diamond at dusk, stadium lights beginning to glow, lush green grass, crisp white chalk lines, cinematic atmosphere with a deep navy and vibrant red color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcO12o3W1J4TLZIyAix5ctRU5ZYAlrki_LRQ1dTIyveovb6TEWaB4XvqjlcxucFbWYHXMvfXMvcmQrWO-zFnSmdV2BKYDAnMl2w63BQft6d9V0qICMZ9ZMuoqpAUtp51sEwroHEFSFQxc3LOV-Q5tOhMTNxMxpNJw00zC-5LWs74CgEeejqkYufd5Pea5lx5KJjM5zo3XHu_T3KF_q41dpzVlcI7DIGKsIB6GyGD45_hynmQZ0x5CxEjgBSk3o1GnaKNZ6Q6oXJAa" />
                <span className="absolute top-4 left-4 z-20 bg-primary  text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Live Now</span>
            </div>
            <div className="p-6 space-y-4">
                <div>
                    <p className="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1 mb-3">
                        <Calendar className="h-5 text-base" />
                        {tournament?.starts_at} - {tournament?.ends_at}
                    </p>

                    <h4 class="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {tournament?.name}</h4>


                    <p className="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1">
                        <Contact className="h-5 text-base" />
                        {tournament?.organization}
                        {/* <pre> {JSON.stringify(tournament,null, 2)}</pre> */}
                    </p>
                </div>



                <div className="flex justify-between items-center py-4 border-y border-outline-variant/20">

                    {competitions?.map((c) =>
                        <div className="text-center">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase">{c.name} Teams</p>
                            <p className="text-xl font-black text-primary">{c?.rosters_count}</p>
                           
                        </div>

                    )}
                 
                </div>
                <div className="flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                        <MapPin className="h-5 text-base" />
                        {tournament?.venue}
                    </span>
                    <Link
                        href={show(tournament?.id)}
                        className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        Dashboard
                        <ArrowRight className="h-5" />

                    </Link>
                </div>
            </div>
        </Link>
    )
}