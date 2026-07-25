import AppPagination from "@/components/ext/app-pagination";
import TableContainer from "@/components/ext/table-container";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { show } from "@/routes/rosters";
import { Link, router } from "@inertiajs/react";
import { SquareArrowOutUpRight, SquareArrowUpRightIcon } from "lucide-react";

export default function RosterList({rosters}) {
    const {data, ...pagniationData} = rosters;
    return (
        <>
    
          <TableContainer>
            <TableHeader>
                <TableHead>Team & State</TableHead>
                <TableHead>Division & Category</TableHead>
                <TableHead>Tournament</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
            </TableHeader>
            <TableBody>
                {data.map((r) => {
const playerProgress = (r.max_players > 0) 
  ? `${(r.roster_players / r.max_players) * 100}%` 
  : '0%';                    
  // const playerProgress = '5%';
                    return (<TableRow key={r.id}>
                    <TableCell>
                       
                            {r?.name}
                          <span className="text-xs">{r?.association}</span>  
                    </TableCell>
                    <TableCell>
                        {r.division} {r.competition}
                    </TableCell>
                    <TableCell className="flex-wrap text-wrap">{r.tournament}</TableCell>
                   
                    <TableCell>
                        <div className="flex items-center gap-2">
                                        <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                            <div className={`bg-secondary h-full  `}style={{ width: playerProgress }}></div>
                                        </div>
                                        <span className="text-xs font-bold text-on-surface">{r.roster_players}/{r.max_players}

                                       
                                        </span>
                                    </div>
                    </TableCell>
                    <TableCell className="uppercase text-xs font-bold tracking-widest text-primary"> {r.status.value}</TableCell>
                        <TableCell> 
                            <Link href={ r.action.route }>
                                  {r.action.label}
                            </Link>
                        </TableCell>
                </TableRow>)})}
            </TableBody>
        </TableContainer>
        {/* <AppPagination paginationData={pagniationData} /> */}
        </>
      
    )
}