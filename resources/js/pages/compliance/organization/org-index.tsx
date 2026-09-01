import AppPagination from "@/components/ext/app-pagination";

import PageHeader from "@/components/ext/page-header";
import RowFirstColumn from "@/components/ext/table/row-first-column";
import { compliance, dashboard } from "@/routes";
import { TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { create, edit, index } from "@/routes/compliance/organizations";
import LinkButton from "@/components/ext/link-button";
import PageHeaderAction from "@/components/ext/page-header-action";
import TableContainer from "@/components/ext/table-container";
import { Link } from "@inertiajs/react";
import TableRowAction from "@/components/ext/table-row-actions";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { complianceBreadcrumbs } from "../compliance-index";

export default function OrganizationIndex({ organizations }) {

    useSetBreadcrumbs([
       ...complianceBreadcrumbs,
        { title: 'Association Management', href: index().url },
    ]);
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
                        <TableHead>Secretary</TableHead>
                        <TableHead>President</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>

                </TableHeader>



                <TableBody>
                    {data.map((org) => <TableRow key={org.id} >
                        <TableCell className="max-w-72"> <RowFirstColumn title={org?.name} subTitle={org?.address} /> </TableCell>
                        <TableCell>
                            <div>
                                <p className="font-label">{org?.state_name} </p>
                                <span className="text-xs text-slate-600 font-body  "> {org?.region}</span>
                            </div>


                        </TableCell>
                        <TableCell>{org?.secretary}</TableCell>
                        <TableCell>{org?.president}</TableCell>
                        <TableCell>
                            <TableRowAction
                                canView={false}
                                editUrl={edit({ organization: org?.id }).url}
                                canDelete={false}
                            />

                        </TableCell>
                    </TableRow>)}

                </TableBody>
                <TableFooter className="bg-zinc-50">
                    <TableRow  >
                        <TableCell colSpan={5} className="p-0 py-2 w-full">

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