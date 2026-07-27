import { PermissionProvider } from '@/context/PermissionContext';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { ThumbsUp, X, XCircle } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const { flash, auth } = usePage().props;
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success , {
                 
                icon: <ThumbsUp className="text-green-500 me-5" />
            });
        }

        if (flash.error) {
            toast.error(flash.error, {
               
                 icon: <XCircle className="text-red-500 me-5" />
            });
        }

        if (flash.warning) {
            toast.warning(flash.warning,  {
               
                 
            });
        }

        if (flash.info) {
            toast.info(flash.info,  {
              
            });
        }
    }, [flash]);
    return (
        <PermissionProvider>
            <AppLayoutTemplate breadcrumbs={breadcrumbs}>
 
                {children}
            </AppLayoutTemplate>
        </PermissionProvider>

    );
}
