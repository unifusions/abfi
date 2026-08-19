


const EventItem = ({ month, day, type, title, location }: { month: string, day: string, type: string, title: string, location: string }) => {
    return (
        <div className="flex gap-4 group cursor-pointer">
            <div
                className="flex flex-col items-center justify-center bg-surface-container-low w-12 h-12 rounded-lg group-hover:bg-primary transition-colors">
                <span className="text-[10px] font-label font-bold uppercase group-hover:text-white/70">{month}</span>
                <span className="text-lg font-black font-headline text-primary group-hover:text-white">{day}</span>
            </div>
            <div className="flex-1 border-b border-outline-variant/15 pb-4">
                <p className="text-xs font-bold text-secondary-container font-label uppercase tracking-tighter">{type}</p>
                <h4 className="text-sm font-bold text-primary font-headline tracking-tight">{title}</h4>
                <p className="text-xs text-on-surface-variant font-body mt-0.5">{location}</p>
            </div>
        </div>
    )
}

export default function EventTimeline({ events }) {



    return (

        <div className="bg-surface-container-lowest p-8 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.04)] flex flex-col gap-6">
            <div className="space-y-1">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Timeline</span>
                <h3 className="text-2xl font-black font-headline text-primary tracking-tighter uppercase">National Events</h3>
            </div>
            <div className="flex-1 space-y-6 overflow-y-auto pr-2">

                {
                    events.map((event) => <EventItem
                        key={event.id}
                        month={event.month} day={event.day} type="Major" title={event?.name} location={event?.venue} />)
                }







            </div>

        </div>
    )
}