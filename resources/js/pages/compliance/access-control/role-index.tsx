import RoleSidebar from "@/components/ext/compliance/role-sidebar";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { permissionModules } from "@/lib/permissionModulesIcon";
import { update } from "@/routes/compliance/roles";
import { sync } from "@/routes/compliance/roles/permissions";
import { useForm } from "@inertiajs/react";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function RoleIndex({ roles, permissions }) {

    const [selectedRole, setSelectedRole] = useState(roles[0]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const { data, setData, patch, errors } = useForm({
        permissions: []
    })

    useEffect(() => {

        setData(
            "permissions",
            selectedRole.permissions.map(p => p.id)
        );


    }, [selectedRole]);

    const togglePermission = (id) => {

        if (data.permissions.includes(id)) {

            setData(
                "permissions",
                data.permissions.filter(x => x !== id)
            );

        } else {

            setData(
                "permissions",
                [...data.permissions, id]
            );

        }

    };

    const  handleSubmit = (e) => {
        e.preventDefault();
        patch(sync(selectedRole.id));
    }
    return (
        <>
            <div className="ps-6">
                <PageHeader title="Roles & Permissions" subText="Manage Roles & Permissions" >

                </PageHeader>
            </div>

            <div class="flex-1 flex flex-col min-w-0 bg-slate-50  relative">

 
                {/* <!-- Dynamic Content Body --> */}
                <div class="flex-1 flex overflow-hidden">
                    {/* <!-- Roles Sidebar (Left List) --> */}
                    <RoleSidebar roles={roles} onSelect={(role) => setSelectedRole(role)} selectedRole={selectedRole} />
                    {/* <!-- Permission Configuration Pane --> */}
                    <div class="flex-1 flex flex-col h-full bg-surface-container-lowest overflow-hidden">
                        {/* <!-- Role Identity Header --> */}
                        <div class="p-8 border-b border-outline-variant/10">
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <h2 class="font-display text-3xl font-extrabold tracking-tight text-primary">Compliance Auditor</h2>
                                        <span class="bg-secondary-fixed text-on-secondary-fixed text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">System Role</span>
                                    </div>
                                    <p class="text-on-surface-variant max-w-2xl leading-relaxed">
                                        Authorized to view and analyze sensitive financial records, roster histories, and regulatory documents. This role is strictly for auditing and cannot initiate transactions or modify active player records.
                                    </p>
                                </div>
                                <button class="flex items-center gap-2 px-4 py-2 border border-outline-variant text-primary rounded font-bold text-sm hover:bg-surface-container-low transition-colors">
                                    <span class="material-symbols-outlined text-lg" data-icon="edit">edit</span>
                                    Edit Identity
                                </button>
                            </div>
                        </div>
                        {/* <!-- Matrix Canvas --> */}
                        <form onSubmit={handleSubmit}>
                            <div class="flex-1 overflow-y-auto p-8 space-y-12 pb-32">


                                {/* <!-- Group: Roster Management --> */}
                                {Object.entries(permissions).map(([module, items]) => {
                                    const config = permissionModules[module];
                                    const Icon = config?.icon;
                                    return (
                                        <section key={module}>
                                            <div className="flex items-center gap-4 mb-6">

                                                <Icon className="text-primary h-10 w-10" />


                                                <div>
                                                    <h4 className="font-headline font-bold text-lg text-primary leading-none">{module}</h4>
                                                    <p className="text-xs text-on-surface-variant mt-1"> </p>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                                                {items.map((item) => <div>
                                                    <div class="p-4 bg-slate-100 rounded-lg flex items-center justify-between group">
                                                        <span class="font-semibold text-sm text-on-surface">{item.name}  </span>
                                                        <label class="relative inline-flex items-center cursor-pointer">
                                                            <input class="sr-only peer" type="checkbox"

                                                                checked={data.permissions.includes(item.id)}

                                                                // checked={selectedRole?.permissions.some(p => p.id === item.id   )}
                                                                onChange={() => togglePermission(item.id)}

                                                            />
                                                            <div class="w-11 h-6 bg-primary/15 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                                        </label>
                                                    </div>
                                                </div>)}
                                                {/* <!-- Matrix Item --> */}


                                            </div>
                                        </section>
                                    )
                                })}



<Button
                            type="submit" class="px-10 py-3 bg-primary text-on-primary font-bold text-sm rounded shadow-lg hover:brightness-125 active:scale-95 transition-all flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm" data-icon="save">save</span>
                                Save Configuration
                            </Button>
                            </div>

                          
                        </form>
                        {/* <!-- Sticky Footer Actions --> */}
                        <footer class="absolute bottom-0 right-0 left-0 glass-panel border-t border-outline-variant/15 p-6 flex justify-end items-center gap-4 z-50">
                            <span class="mr-auto flex items-center gap-2 text-on-surface-variant text-sm">
                                <Info className="text-secondary" />
                                <span class="material-symbols-outlined text-secondary" data-icon="info"
                                // style="font-variation-settings: 'FILL' 1;"
                                >info</span>
                                Unsaved changes will be lost if you navigate away.
                            </span>
                            <button class="px-6 py-3 text-on-surface font-bold text-sm hover:bg-surface-container-high rounded transition-colors">Discard Changes</button>
                            <button class="px-10 py-3 bg-primary text-on-primary font-bold text-sm rounded shadow-lg hover:brightness-125 active:scale-95 transition-all flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm" data-icon="save">save</span>
                                Save Configuration
                            </button>
                        </footer>
                    </div>
                </div>
            </div >
        </>
    )
}