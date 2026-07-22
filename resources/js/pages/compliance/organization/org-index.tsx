import AppPagination from "@/components/ext/app-pagination";
 
import PageHeader from "@/components/ext/page-header";
import RowFirstColumn from "@/components/ext/table/row-first-column";
import { compliance, dashboard } from "@/routes";
import { TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { create } from "@/routes/compliance/organizations";
import LinkButton from "@/components/ext/link-button";
import PageHeaderAction from "@/components/ext/page-header-action";
import TableContainer from "@/components/ext/table-container";

export default function OrganizationIndex({ organizations }) {

    const { data, ...paginationData } = organizations;
    const { links, meta } = paginationData;

    const { selectedAssociation, setSelectedAssociation } = useState();
    return (
        <div className="flex-1 overflow-y-auto px-8 space-y-8">
            <PageHeader title="Association Management">
                    <PageHeaderAction>
 <LinkButton href={create()} icon={Plus}>Add  New Association </LinkButton>
                    </PageHeaderAction>
                   
               
            </PageHeader>

            <TableContainer>
                <TableHeader>
                    <TableRow>
                        <TableHead>Association Name</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>

                </TableHeader>



                <TableBody>
                    {data.map((org) => <TableRow key={org.id} >
                        <TableCell> <RowFirstColumn title={org?.name} subTitle={org?.state_code} /> </TableCell>
                        <TableCell> {org.state}</TableCell>
                        <TableCell><div class="flex justify-end gap-2">
                            <Button
                                variant={"ghost"}
                                onClick={() => setSelectedAssociation(org)}
                            >
                                <Pencil className="text-primary h-5 w-5" />
                            </Button>
                            <Button variant={"destructive"}
                            >
                                <Trash className="text-destructive h-5 w-5" />                                        </Button>
                        </div>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
                <TableFooter className="bg-zinc-50">
                    <TableRow  >
                        <TableCell colSpan={3} className="p-0 py-2 w-full">

                            <AppPagination paginationData={paginationData} />
                        </TableCell>
                    </TableRow>

                </TableFooter>

            </TableContainer>


        </div>
    )
}

OrganizationIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'Associations', href: "#" }

    ]
}