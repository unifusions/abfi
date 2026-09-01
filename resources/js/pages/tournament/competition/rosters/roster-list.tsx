import TableContainer from "@/components/ext/table-container";
import { TableCell, TableRow } from "@/components/ui/table";

export default function RosterList({ rosters }) {
    return (
        <>
            <TableContainer>
                {rosters.map((roster) => 
                <TableRow>
                    <TableCell>{}</TableCell>
                </TableRow>)}
            </TableContainer>
   </>
    )
}