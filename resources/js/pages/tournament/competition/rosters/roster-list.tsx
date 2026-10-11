import TableContainer from "@/components/ext/table-container";
import RowFirstColumn from "@/components/ext/table/row-first-column";
import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "@inertiajs/react";

export default function RosterList({ rosters }) {
    return (
        <>

            <TableContainer>
                {rosters?.data?.map((roster) =>
                    <TableRow>
                        <TableCell>
                            <RowFirstColumn
                                title={roster?.name}
                                subTitle={roster?.association}
                            />

                        </TableCell>
                        <TableCell>{roster?.name}</TableCell>
                        <TableCell>
{roster?.status?.value !== 'approved' ?

<Link
href={roster?.action.route}
>
{roster?.action.label}
</Link>
:
roster?.status?.label

}
                       
                        </TableCell>
                    </TableRow>)}
            </TableContainer>
        </>
    )
}