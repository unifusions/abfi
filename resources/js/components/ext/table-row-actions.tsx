import { Eye, Pencil, Trash } from "lucide-react";
import LinkButton from "./link-button";

interface TableRowActionProps {
    viewUrl?: string;
    editUrl?: string;
    deleteUrl?: string;
    banUrl ?: string;
    canView?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    canBan ?:boolean;
}

export default function TableRowAction({
    canEdit = true, canDelete = true, canView = true, canBan=false,
    viewUrl,
    editUrl, deleteUrl, banUrl 
}: TableRowActionProps) {

    const actions = [
        {
            show: canView && Boolean(viewUrl),
            href: viewUrl,
            icon: Eye,
            variant: "view",
            ariaLabel: "View item",
        },
        {
            show: canEdit && Boolean(editUrl),
            href: editUrl,
            icon: Pencil,
            variant: "ghost",
            ariaLabel: "Edit item",
        },
        {
            show: canDelete && Boolean(deleteUrl),
            href: deleteUrl,
            icon: Trash,
            variant: "destructive",
            ariaLabel: "Delete item",
        },
      
    ];

    const visibleActions = actions.filter((action) => action.show);
    if (visibleActions.length === 0) {
        return null;
    }

    return (
        <div className="flex justify-end gap-2">

            {visibleActions.map(({ href, icon, variant, ariaLabel }) => (
                <LinkButton
                    key={href}
                    href={href!}
                    icon={icon}
                    variant={variant}
                    size="xs"
                    aria-label={ariaLabel}
                />
            ))}
        </div>
    )
}