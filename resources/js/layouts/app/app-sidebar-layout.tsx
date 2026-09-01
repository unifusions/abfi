import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SheetContent } from '@/components/ui/sheet';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({
    children,
    breadcrumbs ,
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />

                <div className='flex-1 p-4 overflow-y-auto'>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />

                    {children}

                    {/* <!-- Footer (from JSON) --> */}

                </div>
                
                <footer className="sticky bottom-0  h-16 flex justify-between items-center px-8 w-full bg-surface border-t border-zinc-100">
                    <p className="font-label text-xs text-on-surface-variant opacity-80">© 2026 Amaetur Baseball Federation of India. All Rights Reserved.</p>
                    {/* <div className="flex space-x-6">
                        <a className="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">Privacy Policy</a>
                        <a className="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">Terms of Service</a>
                        <a className="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">API Documentation</a>
                    </div> */}
                </footer>
            </AppContent>
             
        </AppShell>
    );
}
