import { show } from "@/routes/tournaments";
import { Link } from "@inertiajs/react";
import TableContainer from "../table-container";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import AppPagination from "../app-pagination";

export default function TournamentList({ tournaments }) {

    const { data, ...paginationData } = tournaments;
    return (
        <section className="   overflow-hidden">
            {/* <div class="bg-primary px-8 py-4 flex items-center justify-between">
                <h3 class="text-on-primary font-label text-xs font-black uppercase tracking-[0.2em]">Live Registry Log</h3>
                <button class="text-on-primary/60 text-[10px] font-bold flex items-center gap-1 hover:text-on-primary">
                    <span class="material-symbols-outlined text-sm">download</span> EXPORT CSV
                </button>
            </div> */}
            <TableContainer>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tournament</TableHead>

                        <TableHead>Organizer</TableHead>

                        <TableHead>Registered Rosters</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((t) => <TableRow id={t.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell>
                            <div>
                                <div className="text-primary font-bold">{t.name}</div>

                                <div className="flex flex-col align-items gap-1 text-xs">
                                    <div className="">{t.starts_at} - {t.ends_at} </div>
                                    <div>{t.venue}</div>

                                </div>
                            </div>


                        </TableCell>

                        <TableCell>{t.organizer}</TableCell>

                        <TableCell>{t?.rosters}</TableCell>
                        <TableCell className="text-primary font-black uppercase tracking-widest text-[10px]"> {t.status}</TableCell>
                        <TableCell className="text-right">
                            <Link href={show({ tournament: t.id }).url}> <SquareArrowOutUpRight /> </Link>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </TableContainer>
            <AppPagination paginationData={paginationData} />

        </section>
    )
}