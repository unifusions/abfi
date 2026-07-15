import { LockOpenIcon, Plus } from "lucide-react";



export default function RoleSidebar({ roles, onSelect }) {
    return (
        <div className="w-80 flex-shrink-0 bg-surface-container-low flex flex-col border-r border-outline-variant/15">
            <div className="p-6 flex justify-between items-center">
                <h3 className="font-label text-xs font-black tracking-widest uppercase text-on-surface-variant opacity-60">Existing Roles</h3>
                <button className="p-1.5 bg-secondary text-white rounded hover:scale-105 transition-transform">
                    <Plus />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide px-3 pb-6 space-y-1">
                {/* <!-- Role Card: Active --> */}
                {roles.length > 0 && roles.map((role) => <div key={role.id} 
                    onClick={() =>onSelect(role)}
                className="p-4   bg-zinc-50 shadow-sm border-l-4 border-secondary cursor-pointer transition-all">
                    <div className="flex justify-between items-start mb-1">
                        <span className="font-headline font-bold text-primary">{role.name}</span>
                        <span className="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
                    </div>

                    <p className="text-xs text-on-surface-variant line-clamp-1">{role.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                        <LockOpenIcon className="text-accent-secondary h-5" />
                        <span className="text-[11px] font-semibold text-on-surface-variant">{role?.permissions.length} Permissions Assigned</span>
                    </div>
                </div>
                )}



            </div>
        </div>
    )
}