import PageHeader from "@/components/ext/page-header"
import TableContainer from "@/components/ext/table-container"
import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext"
import { dashboard, compliance } from "@/routes"

import { Pencil, Plus } from "lucide-react"
import { complianceBreadcrumbs } from "../compliance-index"
import { index } from "@/routes/compliance/categories"
import CategoryCreateDialog from "./category-create-dialog"
import TableRowAction from "@/components/ext/table-row-actions"
import { useState } from "react"
import CategoryEditDialog from "./category-edit-dialog"
export default function CategoryIndex({ categories }) {

    useSetBreadcrumbs([
        ...complianceBreadcrumbs,
        { title: 'Tournament Categories', href: index().url }
    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const handleEdit = (category) => {
        alert(JSON.stringify(category));
        setSelectedCategory(category);
        setEditOpen(true);
    }
    return (
        <div className="px-6">
            <PageHeader title="Tournament Categories" >

                <CategoryCreateDialog />
            </PageHeader>

            <TableContainer>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Age Criteria</TableHead>
                    <TableHead>Player Criteria</TableHead>
                    <TableHead>Official Criteria</TableHead>
                    <TableHead className="text-end">Actions</TableHead>
                </TableRow>
                <TableBody>
                    {categories.map((category) =>
                        <TableRow key={category.id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.code}</TableCell>
                            <TableCell>{category.minimum_age} - {category.maximum_age} Years</TableCell>
                            <TableCell>{category.minimum_players}  - {category.maximum_players} Players</TableCell>
                            <TableCell>{category.maximum_officials} Officials</TableCell>
                            <TableCell>

                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost" onClick={() => handleEdit(category)}>
                                        <Pencil className="w-4 h-4" />
                                    </Button>
                                </div>


                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </TableContainer>

                    <CategoryEditDialog 
                        category={selectedCategory}
                        open={editOpen}
                        setOpen={setEditOpen}
                    />

        </div>
    )
}

