// resources/js/hooks/useAuthorization.ts

import { usePage } from "@inertiajs/react";

type Permissions = Record<string, string[]>;

export function useAuthorization() {
    const { auth } = usePage<{
        auth: {
            is_super_admin: boolean;
            permissions: Permissions;
        };
    }>().props;

    const can = (permission: string): boolean => {
        if (auth.is_super_admin) {
            return true;
        }

        const [module] = permission.split(".");

        return auth.permissions[module]?.includes(permission) ?? false;
    };

    const canModule = (module: string): boolean => {
        if (auth.is_super_admin) {
            return true;
        }
 
        return (auth.permissions[module]?.length ?? 0) > 0;
    };

    return {
        can,
        canModule,
        permissions: auth.permissions,
        isSuperAdmin: auth.is_super_admin,
    };
}