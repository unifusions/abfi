import { ArrowUpDown, Ellipsis, EllipsisVertical } from "lucide-react"
import LinkButton from "../link-button"

const officials = [
    {
        id: 'APOFFC86',
        name: 'M ACHYUTA RAO',
        father_name: 'SAMBAIAH',
        gender: 'Male',
        state: 'Andhra Pradesh',
        type: 'State Official',
        age:'50',
        image:'/images/officials/APOFFC86.jpg',
        url : 'http://localhost:8000/officials/1'

    },

    {
        id: 'TNOFFC444',
        name: 'Venkatesh',
        father_name: 'Sankaran',
        gender: 'Male',
        state: 'Tamil Nadu',
        type: 'State Official',
        age: '64',
        image:'/images/officials/TNOFFC444.jpg',
                url : 'http://localhost:8000/officials/1'


    },

    {
        id: 'TNOFFC219',
        name: 'R MAHESH KUMAR',
        father_name: 'C RAMACHANDRAN',
        gender: 'Male',
        type: 'State Official',
        state: 'Tamil Nadu',
            age: '59',
            image:'/images/officials/TNOFFC219.jpg',
                    url : 'http://localhost:8000/officials/1'



    },

    {
        id: 'JHOFFC479',
        name: 'Bijay Shankar singh',
        father_name: 'Late Sri. Ambika Prasad singh',
        gender: 'Male',
        state: 'Jharkhand',
        type: 'State Official',
        age: '45',
        image:'/images/officials/JHOFFC479.jpg',
                url : 'http://localhost:8000/officials/1'


    },

    {
        id: 'PYOFFC460',
        name: 'ANANDARAJ',
        father_name: 'SITHANANDAM',
        gender: 'Male',
        state: 'Pondicherry',
        type: 'Tournament Official',
        age:'56',
        image:'/images/officials/PYOFFC460.jpg',
                url : 'http://localhost:8000/officials/1'


    },
]

export default function OfficialList() {
    return (
        <div class=" rounded-2xl overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse stat-sheet">
                    <thead>
                        <tr class="bg-primary text-white text-on-primary">
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest cursor-pointer group">
                                <div class="flex items-center gap-2">
                                    Official / ID
                                    <ArrowUpDown className="h-4 *:opacity-50 group-hover:opacity-100 transition-opacity" />
                
                                  
                                </div>
                            </th>
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest cursor-pointer group">
                                <div class="flex items-center gap-2">
                                    Category
                                                                      <ArrowUpDown className="h-4 *:opacity-50 group-hover:opacity-100 transition-opacity" />

                                </div>
                            </th>
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest cursor-pointer group">
                                <div class="flex items-center gap-2">
                                    Location
                                                                       <ArrowUpDown className="h-4 *:opacity-50 group-hover:opacity-100 transition-opacity" />

                                </div>
                            </th>
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest cursor-pointer group text-center">
                                <div class="flex items-center justify-center gap-2">
                                    Age
                                                                       <ArrowUpDown className="h-4 *:opacity-50 group-hover:opacity-100 transition-opacity" />

                                </div>
                            </th>
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest">Gender</th>
                            <th class="px-6 py-5 font-label text-xs uppercase tracking-widest">Status</th>
                            <th class="px-6 py-5"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-outline-variant/5">

                        {officials.map((official) =>
                            <tr id={official.id} className="group hover:bg-primary/5 transition-colors">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant/20">
                                            <img className="w-full h-full object-cover" 
                                            src={official.image ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuDRd9l20CN8l3fnvERFXMxxbzsEmjj1krkw1aobaZlmWKFhAJ-6TnWQ27hsntnKEwKLleX8PMY0wLZ4TN1Z98wdS3QNjBpvhALesFaqfTpF9NFmVG73cOt47P5WiPFrqBsLXi6TpDvYiAVaQ3NCjeaS4lik40CYmFClK649cCbXOYi4mWmFhg_nSKDYi-LltlZcAPhrWuCmaO2ZJFoFbM7DMdF9riAIF7PaiDJ1aStghCUvqKELk9EUxw"} />
                                        </div>
                                        <div>
                                            <p className="font-body text-body-md font-bold text-primary group-hover:text-secondary transition-colors">{official.name}</p>
                                            <p className="font-label text-xs text-on-surface-variant font-medium">#{official.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">{official.type}</span>
                                </td>
                                <td className="px-6 py-5">
                                    <p className="font-body text-body-md text-primary font-medium">{official.state}</p>
                                    {/* <p className="font-label text-xs text-on-surface-variant">District 4 (West Coast)</p> */}
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span className="font-display font-bold text-primary">{official.age}</span>
                                </td>
                               
                                <td className="px-6 py-5">
                                    <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold">Active</span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <LinkButton href={official.url} className="text-on-surface-variant hover:text-primary transition-colors p-1">
                                        <EllipsisVertical />
                                    </LinkButton>
                                </td>
                            </tr>


                        )}


                    </tbody>
                </table>
            </div>
        </div>

    )
}