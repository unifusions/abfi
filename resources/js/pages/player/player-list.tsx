import AppPagination from "@/components/ext/app-pagination";
import TableContainer from "@/components/ext/table-container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { show, edit } from "@/routes/players";
import { Link } from "@inertiajs/react";
import { Eye, Pencil } from "lucide-react";

export default function PlayerList({ players, disabled }) {

    const { data, ...paginationData } = players;
    return (
        <>
            <TableContainer>

                <TableHeader>
                    <TableRow>
                        <TableHead>Player ID</TableHead>
                        <TableHead>Player Name</TableHead>
                        <TableHead>Team/Association</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Registered On</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className={cn("transition-all",
                    { "opacity-15 cursor-not-allowed": disabled }

                )} {...disabled && disabled}>
                    {data.map((player) => <TableRow key={player.id}>
                        <TableCell className="font-mono text-primary font-bold text-xs">{player.player_code}</TableCell>
                        <TableCell  >
                            <div className="flex items-center gap-3">
                                {player.profile_photo ? <>

                                    <img src={player.profile_photo} className="w-8 h-8 rounded-full object-cover" />
                                </> : <div
                                    className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-primary text-xs">
                                    {player.first_name[0]}{player.last_name[0]}</div>
                                }

                                <div>
                                    <p className="font-bold text-primary">{player.name}</p>
                                    <p className="text-[10px] text-on-surface-variant font-medium">
                                        {player.positions.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>{player.association}</TableCell>
                        <TableCell>{player.age} Years |  {player.gender}</TableCell>
                        <TableCell>{player.created_at}</TableCell>
                        <TableCell>
                            <div className="inline-flex gap-3">
                                <Link href={show({ player: player?.id }).url}
                                ><Eye className="h-4 w-4" />
                                </Link>

                                <Link href={edit({ player: player?.id }).url}>
                                    <Pencil className="h-4 w-4" /></Link>
                            </div>

                        </TableCell>
                    </TableRow>)}
                </TableBody>


            </TableContainer>
            <AppPagination paginationData={paginationData} />
        </>
    )
}