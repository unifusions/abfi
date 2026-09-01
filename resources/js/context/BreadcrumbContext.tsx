import React, { createContext, useContext, useState, useEffect } from 'react';
import { type BreadcrumbItem } from '@/types';

type BreadcrumbContextType = {
    breadcrumbs: BreadcrumbItem[];
    setBreadcrumbs: (crumbs: BreadcrumbItem[]) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

// 1. Context Provider to wrap the app root
export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
    return (
        <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbContext.Provider>
    );
}

// 2. Hook for AppLayout to READ the current breadcrumbs
export function useBreadcrumbs() {
    const context = useContext(BreadcrumbContext);
    if (!context) throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
    return context.breadcrumbs;
}

// 3. Hook for individual Page Components to SET their breadcrumbs
export function useSetBreadcrumbs(crumbs: BreadcrumbItem[]) {
    const context = useContext(BreadcrumbContext);
    if (!context) throw new Error('useSetBreadcrumbs must be used within a BreadcrumbProvider');

    // Stringify the array to prevent infinite re-renders from object reference changes
    const serializedCrumbs = JSON.stringify(crumbs);

    useEffect(() => {
        context.setBreadcrumbs(JSON.parse(serializedCrumbs));
        
        // Cleanup: Clear breadcrumbs when the page unmounts
        return () => context.setBreadcrumbs([]);
    }, [serializedCrumbs]);
}