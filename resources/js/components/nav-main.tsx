import { Link, usePage } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import usePermission from '@/hooks/use-permissions';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    const {can} = usePermission();
  const { url } = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <div className="mt-3"></div>
            <SidebarMenu>
                {items.map((item) => {

                      if(can(item?.permission)){
                        console.log("allowed")
                      }
                      else{
                        console.log("not allowed")
                      }
                          const isActive = url === item.href.url || url.startsWith(`${item.href.url}`);
                        
                       const classname = isActive ? 'flex items-center gap-3 px-3 py-2.5 bg-white dark:bg-slate-900 text-[#002D62] dark:text-blue-300 shadow-sm rounded-lg border-l-4 border-red-600 transition-all duration-200 ease-in-out' : 'flex items-center gap-3 px-3 py-2.5  dark:bg-slate-900 text-[#002D62] hover:bg-white hover:shadow-sm dark:text-blue-300   rounded-lg border-l-4 border-transparent hover:border-red-600 transition-all duration-200 ease-in-out';
                    return(
                    
                    
                    <SidebarMenuItem key={item.title}>
                        
                        {/* <SidebarMenuButton
                            asChild
                            isActive={isCurrentUrl(item.href)}
                            tooltip={{ children: item.title }}
                            className="font-sans-serif"
                        > */}
                            <Link href={item.href} prefetch 
                            className={classname}>
                            
                                {item.icon && <item.icon />}
                                <span className="text-xs font-label uppercase tracking-widest font-bold">{item.title}</span>
                            </Link>

                          

                        {/* </SidebarMenuButton> */}
                    </SidebarMenuItem>
                )})}
            </SidebarMenu>
        </SidebarGroup>
    );
}
