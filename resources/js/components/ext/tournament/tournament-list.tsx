

const tournaments = [
    {
        id: '1',
        name: '37th Senior Nationals Baseball championship Men and Women',
        organizer: 'Punjab Baseball Association',
        dates: 'Dec 26 - Dec 30, 2024',
        venue: 'Akal College of Physical Education Mastuana Sahib Sangrur Punjab',
        status: 'Closed'
    },
    {
        id: '2',
        name: '30th Sub Junior National Baseball Championship Boys and Girls',
        organizer: 'Punjab Baseball Association',
        dates: 'Dec 26 - Dec 30, 2024',
        venue: 'Akal College of Physical Education Mastuana Sahib Sangrur Punjab',
        status: 'Closed'
    },
    {
        id: '3',
        name: '30th Sub Junior National Baseball Championship Boys and Girls',
        organizer: 'Punjab Baseball Association',
        dates: 'Dec 26 - Dec 30, 2024',
        venue: 'Akal College of Physical Education Mastuana Sahib Sangrur Punjab',
        status: 'Closed'
    },
];

export default function TournamentList() {
    return (
        <section class="mt-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div class="bg-primary px-8 py-4 flex items-center justify-between">
                <h3 class="text-on-primary font-label text-xs font-black uppercase tracking-[0.2em]">Live Registry Log</h3>
                <button class="text-on-primary/60 text-[10px] font-bold flex items-center gap-1 hover:text-on-primary">
                    <span class="material-symbols-outlined text-sm">download</span> EXPORT CSV
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="bg-surface-container border-b border-outline-variant/10">
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Tournament Name</th>
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Dates</th>
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Organizer</th>
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Location</th>
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Registered Teams</th>
                            <th className="px-8 py-4 font-label text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                        {
                            tournaments.map((t) => <tr id={t.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-8 py-4 font-bold text-sm text-primary">{t.name}</td>
                                <td className="px-8 py-4 text-sm  ">{t.dates}</td>
                                <td className="px-8 py-4 text-sm  ">{t.organizer}</td>
                                <td className="px-8 py-4 text-sm  ">{t.venue}</td>
                                <td className="px-8 py-4 text-sm text-primary font-bold">12 / 16</td>
                                <td className="px-8 py-4">
                                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{t.status}</span>
                                </td>

                            </tr>)
                        }
                        
                        
                         
                    </tbody>
                </table>
            </div>
        </section>
    )
}