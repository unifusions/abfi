import RoleSidebar from "@/components/ext/compliance/role-sidebar";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { permissionModules } from "@/lib/permissionModulesIcon";
import { dashboard } from "@/routes";
import { compliance } from "@/routes";

import { sync } from "@/routes/compliance/roles/permissions";
import { useForm } from "@inertiajs/react";

import { Info, Pencil, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { complianceBreadcrumbs } from "../compliance-index";
import { index } from "@/routes/compliance/roles";

export default function RoleIndex({ roles, permissions, uuid }) {

    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const { data, setData, patch, errors } = useForm({
        permissions: []
    })

    useSetBreadcrumbs([
        ...complianceBreadcrumbs, {
            title: 'Roles & Permissions',
            href: index().url
        }
    ]);
    useEffect(() => {

        setData(
            "permissions",
            selectedRole?.permissions?.map(p => p.id)
        );


    }, [selectedRole]);

    const togglePermission = (id) => {

        if (data?.permissions?.includes(id)) {

            setData(
                "permissions",
                data?.permissions?.filter(x => x !== id)
            );

        } else {

            setData(
                "permissions",
                [...data?.permissions, id]
            );

        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(sync(selectedRole?.id));
    }
    return (
        <>
            <div className="ps-6">
                <PageHeader title="Roles & Permissions" subText="Manage Roles & Permissions for Federation" >

                </PageHeader>
            </div>

            <div className="flex-1 flex flex-col min-w-0 bg-slate-50  relative">

                {/* {JSON.stringify(uuid)} */}

                {/* <!-- Dynamic Content Body --> */}
                <div className="flex-1 flex overflow-hidden">

                    <RoleSidebar roles={roles} onSelect={(role) => setSelectedRole(role)} selectedRole={selectedRole} />



                    <div className="flex-1 flex flex-col h-full bg-surface-container-lowest overflow-hidden">


                        {selectedRole ?

                            <>

                                <div className="p-8 border-b border-outline-variant/10">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary">{selectedRole?.name}</h2>
                                                {selectedRole?.is_system && <span className="bg-accent-secondary text-white text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">System Role</span>}

                                            </div>
                                            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                                                {selectedRole?.description}
                                            </p>
                                        </div>
                                        {!selectedRole?.is_system && <Button variant="outline" size={"xl"}>
                                            <Pencil /> Edit Identity </Button>}
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex-1 overflow-y-auto p-8 space-y-12 pb-32">


                                        {/* <!-- Group: Roster Management --> */}
                                        {Object.entries(permissions).map(([module, items]) => {
                                            const config = permissionModules[module];
                                            const Icon = config?.icon;
                                            return (
                                                <section key={module}>
                                                    <div className="flex items-center gap-4 mb-6">

                                                        {Icon && <Icon className="text-primary h-10 w-10" />}


                                                        <div>
                                                            <h4 className="font-headline font-bold text-lg text-primary leading-none">{module}</h4>
                                                            <p className="text-xs text-on-surface-variant mt-1"> </p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                                                        {items.map((item) => <div>
                                                            <div className="p-4 bg-slate-100 rounded-lg flex items-center justify-between group">
                                                                <span className="font-semibold text-sm text-on-surface">{item?.name}  </span>
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    <input className="sr-only peer" type="checkbox"

                                                                        checked={data?.permissions?.includes(item?.id)}

                                                                        // checked={selectedRole?.permissions.some(p => p.id === item.id   )}
                                                                        onChange={() => togglePermission(item?.id)}

                                                                    />
                                                                    <div className="w-11 h-6 bg-primary/15 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">

                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>)}
                                                        {/* <!-- Matrix Item --> */}


                                                    </div>
                                                </section>
                                            )
                                        })}



                                        <div className="flex flex-row flex-wrap gap-2">
                                            <Button
                                                type="submit" size="xl" >
                                                <Save />
                                                Save Configuration
                                            </Button>

                                            <span className="mr-auto flex items-center gap-2 text-on-surface-variant text-sm">
                                                <Info className="text-secondary" />

                                                Unsaved changes will be lost if you navigate away.
                                            </span>

                                        </div>
                                    </div>


                                </form></>
                            : <div className="flex items-center mx-auto h-full">
                                Select role to continue with permissions
                            </div>}




                    </div>


                </div>

            </div >
        </>
    )
}

RoleIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance() },
        { title: 'Roles & Permissions', href: "#" }
    ]
}