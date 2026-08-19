import TableContainer from "@/components/ext/table-container";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";

export default function CompetitionStandings({ standings }) {
    return (
        <>
            <TableContainer>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Roster</TableHead>
                    <TableHead>P</TableHead>
                    <TableHead>D</TableHead>
                    <TableHead>L</TableHead>
                    <TableHead className="font-bold">W</TableHead>
                </TableRow>
                {standings.length > 0 && standings.map((standing, index) =>

                    <TableRow className="bg-white">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell> {standing?.roster?.name} </TableCell>
                        <TableCell> {standing?.played} </TableCell>
                        <TableCell>{standing?.draw}</TableCell>

                        <TableCell> {standing?.lost} </TableCell>
                        <TableCell className="font-bold"> {standing?.won} </TableCell>

                    </TableRow>
                )}
            </TableContainer>
        </>
    )
}