import { ArrowUpDown, Ellipsis, EllipsisVertical } from "lucide-react"
import LinkButton from "../link-button"
import TableContainer from "../table-container"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Link } from "@inertiajs/react"
import TableRowAction from "../table-row-actions"
import { edit } from "@/routes/officials"

const officials = [
    {
        id: 'APOFFC86',
        name: 'M ACHYUTA RAO',
        father_name: 'SAMBAIAH',
        gender: 'Male',
        state: 'Andhra Pradesh',
        type: 'State Official',
        age: '50',
        image: '/images/officials/APOFFC86.jpg',
        url: 'http://localhost:8000/officials/1'

    },

    {
        id: 'TNOFFC444',
        name: 'Venkatesh',
        father_name: 'Sankaran',
        gender: 'Male',
        state: 'Tamil Nadu',
        type: 'State Official',
        age: '64',
        image: '/images/officials/TNOFFC444.jpg',
        url: 'http://localhost:8000/officials/1'


    },

    {
        id: 'TNOFFC219',
        name: 'R MAHESH KUMAR',
        father_name: 'C RAMACHANDRAN',
        gender: 'Male',
        type: 'State Official',
        state: 'Tamil Nadu',
        age: '59',
        image: '/images/officials/TNOFFC219.jpg',
        url: 'http://localhost:8000/officials/1'



    },

    {
        id: 'JHOFFC479',
        name: 'Bijay Shankar singh',
        father_name: 'Late Sri. Ambika Prasad singh',
        gender: 'Male',
        state: 'Jharkhand',
        type: 'State Official',
        age: '45',
        image: '/images/officials/JHOFFC479.jpg',
        url: 'http://localhost:8000/officials/1'


    },

    {
        id: 'PYOFFC460',
        name: 'ANANDARAJ',
        father_name: 'SITHANANDAM',
        gender: 'Male',
        state: 'Pondicherry',
        type: 'Tournament Official',
        age: '56',
        image: '/images/officials/PYOFFC460.jpg',
        url: 'http://localhost:8000/officials/1'


    },
]

export default function OfficialList({ officials }) {
    return (
        <TableContainer>
            <TableRow>


                <TableHead>Official / ID </TableHead>
                <TableHead>Association</TableHead>
                <TableHead>Category </TableHead>

                <TableHead>Age </TableHead>
                <TableHead>Gender </TableHead>
                <TableHead className="  text-right">Actions </TableHead>

            </TableRow>
            <TableBody>

                {
                    officials.length < 1 ?
                        <TableRow >
                            <TableCell colSpan={6} className="text-center text-zinc-500"> No officials found</TableCell>
                        </TableRow>
                        :
                        officials.map((official) =>
                            <TableRow id={official.id} className="group hover:bg-primary/5 transition-colors">
                                <TableCell>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12   flex items-center justify-center overflow-hidden border border-outline-variant/20">
                                            <img className="w-full h-full object-cover"
                                                src={official.profile_photo} />
                                        </div>
                                        <div>
                                            <p className="font-body text-body-md font-bold text-primary group-hover:text-secondary transition-colors">{official.name}</p>
                                            <p className="font-label text-xs text-on-surface-variant font-medium">#{official.official_code}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell  >
                                    <p className="font-body text-body-md text-primary font-medium">
                                        {official.association}
                                    </p>
                                    <p className="font-label text-xs text-on-surface-variant">{official.state ?? 'NA'}</p>
                                </TableCell>
                                <TableCell  >
                                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">{official.type}</span>
                                </TableCell>

                                <TableCell >
                                    <span className="font-display font-bold text-primary">{official.age}</span>
                                </TableCell>

                                <TableCell>{official.gender}</TableCell>


                                <TableCell className="  text-right">
                                    <TableRowAction 
                                        editUrl={edit({official:official?.id}).url}
                                    
                                    />
                                    
                                </TableCell>
                            </TableRow>


                        )}
            </TableBody>



        </TableContainer>
    )
}