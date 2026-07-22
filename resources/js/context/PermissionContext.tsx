import { createContext, useContext } from "react";
import { usePage } from "@inertiajs/react";

const PermissionContext = createContext({
    can: (_: string) => false,
});

export function PermissionProvider({ children }) {
    const { auth } = usePage().props;

    const permissions =  auth.permissions;

    const can = (permission: string) => {
        return auth.isSuperAdmin || permissions.has(permission);
    };

    return (
        <PermissionContext.Provider value={{ can }}>
            {children}
        </PermissionContext.Provider>
    );
}

export const usePermission = () => useContext(PermissionContext);