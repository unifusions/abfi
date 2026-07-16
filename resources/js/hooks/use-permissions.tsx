import { usePage } from "@inertiajs/react";

export default function usePermission() {
    const { auth } = usePage().props;

    const permissions = auth.permissions ?? [];

    const can = (permission) => permissions.includes(permission);
    
    return {
        permissions,
        can,
    };
}