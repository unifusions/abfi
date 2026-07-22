import { Table } from "../ui/table";

export default function TableContainer({children}) {
    return (
        <div className="bg-zinc-100  overflow-hidden border border-outline-variant/10 ">
           <Table className = "w-full text-left border-collapse">
            {children}
           </Table>
        </div>
    )
}