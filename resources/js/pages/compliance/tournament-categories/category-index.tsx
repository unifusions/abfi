 import PageHeader from "@/components/ext/page-header"
import TableContainer from "@/components/ext/table-container"
import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { dashboard, compliance } from "@/routes"
 
import { Plus } from "lucide-react"

export default function CategoryIndex({ categories }) {
    return (
        <div className="px-3">
            <PageHeader title="Tournament Categories" >
                <button  className="bg-primary text-on-primary text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all">
                  <Plus className="w-5 h-5" />  Add New Category</button>
            </PageHeader>

            <TableContainer>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Age Criteria</TableHead>
                    <TableHead>Player Criteria</TableHead>
                    <TableHead>Official Criteria</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
                <TableBody>
                    {categories.map((category) => 
                    <TableRow key={category.id}>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.code}</TableCell>
                        <TableCell>{category.minimum_age} - {category.maximum_age} Years</TableCell>
                        <TableCell>{category.minimum_players} - {category.maximum_players} </TableCell>
                        <TableCell>{category.maximum_officials} </TableCell>
                        <TableCell>
                            <Button variant="outline">Edit</Button>
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </TableContainer>
            

        </div>
    )
}

CategoryIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'Tournament Categories', href: "#" }
    ],

}