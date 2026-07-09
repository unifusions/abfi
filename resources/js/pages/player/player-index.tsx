import WidgetCard from "@/components/ext/dashboard/widget-card";
import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import PlayerIndexStats from "@/components/ext/player/player-index-stats";
import { create } from "@/routes/players";
import { Head } from "@inertiajs/react";
import { ChevronDown, Edit, Option, SlidersHorizontal, UserPlus } from "lucide-react";

export default function PlayerIndex() {
    return (
        <>
           
<PageHeader title="Players Directory"

               
                belowPill="12,482 Registered"



            >
 
                   <LinkButton href = {create()} icon={UserPlus}>
                            Add Player
                        </LinkButton>
            </PageHeader>
           


              
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                    <PlayerIndexStats
                        title="Verified Players"
                        value="11,048"
                        changeType="increase"
                        changeValue="+5.2% from last year"
                    />


                    <PlayerIndexStats
                        title="  Pending Reviews"
                        value="1,092"
                        changeType="increase"
                        changeValue="+5.2% from last year"
                    />




                </div>

                <div className="bg-surface-container-low p-4 rounded-t-xl flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[300px] relative">
                        <span
                            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface"
                            placeholder="Search by name, ID, or team..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                className="appearance-none bg-surface-container-lowest border-none pl-4 pr-10 py-3 rounded-lg text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20">
                                <option>All Regions</option>
                                <option>Northeast</option>
                                <option>Midwest</option>
                                <option>Southeast</option>
                                <option>Southwest</option>
                                <option>Pacific</option>
                            </select>
                            <ChevronDown
                                className=" absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" /> 
                        </div>
                        <div className="relative">
                            <select
                                className="appearance-none bg-surface-container-lowest border-none pl-4 pr-10 py-3 rounded-lg text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20">
                                <option>All Age Groups</option>
                                <option>U12</option>
                                <option>U14</option>
                                <option>U16</option>
                                <option>U18</option>
                                <option>Collegiate</option>
                            </select>
                    <ChevronDown
                                className=" absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" /> 
                        </div>
                        <button
                            className="bg-surface-container-lowest p-3 rounded-lg hover:bg-surface-container-highest transition-colors">
                            <SlidersHorizontal className="material-symbols-outlined text-primary" />
                        </button>
                    </div>
                </div>

                <div className="bg-surface-container-lowest rounded-b-xl overflow-hidden shadow-sm ">
                    <table className="w-full text-left border-collapse">
                        <thead className="text-white font-display">
                            <tr className="bg-primary text-on-primary">
                                <th className="px-6 py-4  text-xs   uppercase   font-bold">Registry ID
                                </th>
                                <th className="px-6 py-4  text-xs  uppercase  font-bold">Player Name
                                </th>
                                <th className="px-6 py-4 text-xs  uppercase   font-bold">Team /
                                    Organization</th>
                                <th className="px-6 py-4  text-xs   uppercase   font-bold">Position
                                </th>
                                <th className="px-6 py-4  text-xs uppercase  font-bold">Status</th>
                                <th className="px-6 py-4   text-xs uppercase  font-bold">Last
                                    Activity</th>
                                <th className="px-6 py-4  text-xs uppercase tracking-widest font-bold text-right">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            <tr className="hover:bg-surface-container-low transition-colors group">
                                <td className="px-6 py-4 font-mono text-xs font-bold text-primary">#DR-882104</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs">
                                            RM</div>
                                        <div>
                                            <p className="font-bold text-primary">Rodriguez, Mateo</p>
                                            <p className="text-[10px] text-on-surface-variant font-medium">U16 Junior League</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">Miami Titans Academy</td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">Shortstop (SS)</td>
                                <td className="px-6 py-4">
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-fixed text-on-primary-fixed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-surface-tint mr-1.5"></span>
                                        Verified
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-on-surface-variant">2 hours ago</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        className="text-primary opacity-25 group-hover:opacity-100 transition-opacity p-2 hover:bg-primary/5 rounded-full">
                                       <Edit />
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors group">
                                <td className="px-6 py-4 font-mono text-xs font-bold text-primary">#DR-882199</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs">
                                            CH</div>
                                        <div>
                                            <p className="font-bold text-primary">Chen, Harrison</p>
                                            <p className="text-[10px] text-on-surface-variant font-medium">Collegiate Div I</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">West Coast Wolves</td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">Pitcher (RHP)</td>
                                <td className="px-6 py-4">
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary-fixed text-on-secondary-fixed-variant">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                                        Action Required
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-on-surface-variant">5 mins ago</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-primary/5 rounded-full">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group">
                                <td className="px-6 py-4 font-mono text-xs font-bold text-primary">#DR-882205</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs">
                                            JS</div>
                                        <div>
                                            <p className="font-bold text-primary">Smith, Jackson</p>
                                            <p className="text-[10px] text-on-surface-variant font-medium">U18 National Team</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">Empire State Elite</td>
                                <td className="px-6 py-4 text-sm font-medium text-on-surface">First Base (1B)</td>
                                <td className="px-6 py-4">
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-surface-variant text-on-surface-variant">
                                        <span className="w-1.5 h-1.5 rounded-full bg-outline mr-1.5"></span>
                                        Pending
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-on-surface-variant">Yesterday</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        class="text-primary opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-primary/5 rounded-full">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                </td>
                            </tr>
                            {/* <!-- Zebra stripes --> */}
                             
                        </tbody>
                    </table>
                    {/* <!-- Pagination --> */}
                    <div class="px-6 py-4 bg-surface-container-low flex justify-between items-center">
                        <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Showing 1-25 of
                            12,482 Players</p>
                        <div class="flex gap-2">
                            <button
                                class="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high transition-colors text-primary disabled:opacity-50"
                                disabled="">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                class="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold">1</button>
                            <button
                                class="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high transition-colors text-primary font-bold">2</button>
                            <button
                                class="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high transition-colors text-primary font-bold">3</button>
                            <button
                                class="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high transition-colors text-primary">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            





        </>
    )
}