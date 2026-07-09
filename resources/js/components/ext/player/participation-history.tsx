export default function ParticipationHistory() {
    return (
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                            <div class="p-8 border-b border-surface-container">
                                <h3 class="font-headline font-bold text-2xl uppercase tracking-tight flex items-center">
                                    <span class="w-2 h-8 bg-primary mr-3"></span>
                                    Participation History
                                </h3>
                            </div>
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-primary text-on-primary">
                                        <th class="py-4 px-8 font-label text-[10px] uppercase tracking-widest font-bold">Tournament</th>
                                        <th class="py-4 px-4 font-label text-[10px] uppercase tracking-widest font-bold">Team</th>
                                        <th class="py-4 px-4 font-label text-[10px] uppercase tracking-widest font-bold">Date</th>
                                        <th class="py-4 px-8 text-right font-label text-[10px] uppercase tracking-widest font-bold">Result</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-surface-container-low">
                                    <tr class="hover:bg-surface-container-low transition-colors group">
                                        <td class="py-5 px-8 font-bold text-primary text-sm group-hover:text-secondary">National Junior Invitational</td>
                                        <td class="py-5 px-4 text-sm text-on-surface-variant">Riverside Titans</td>
                                        <td class="py-5 px-4 text-xs font-label text-on-surface-variant">JUN 2024</td>
                                        <td class="py-5 px-8 text-right">
                                            <span class="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-black rounded-full uppercase">Champions</span>
                                        </td>
                                    </tr>
                                    <tr class="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors group">
                                        <td class="py-5 px-8 font-bold text-primary text-sm group-hover:text-secondary">Coast Classic U14</td>
                                        <td class="py-5 px-4 text-sm text-on-surface-variant">Riverside Titans</td>
                                        <td class="py-5 px-4 text-xs font-label text-on-surface-variant">MAY 2024</td>
                                        <td class="py-5 px-8 text-right">
                                            <span class="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-black rounded-full uppercase">Runner-up</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low transition-colors group">
                                        <td class="py-5 px-8 font-bold text-primary text-sm group-hover:text-secondary">Winter Series Showcase</td>
                                        <td class="py-5 px-4 text-sm text-on-surface-variant">East Bay All-Stars</td>
                                        <td class="py-5 px-4 text-xs font-label text-on-surface-variant">JAN 2024</td>
                                        <td class="py-5 px-8 text-right">
                                            <span class="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-black rounded-full uppercase">Qualified</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    )
}