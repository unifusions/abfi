import { Shield } from "lucide-react";

export default function AuditId({id}) {
    return (
        <div
        className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded border border-outline-variant">
            <Shield />
       
        <span className="text-xs font-mono font-bold text-primary">AUDIT-ID: {id}</span>
    </div>
    )
}