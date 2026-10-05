import { Link, usePage } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import { usePermission } from '@/context/PermissionContext';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronRight } from 'lucide-react';


export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    const { url } = usePage();
    return (
        <SidebarGroup className="px-2 py-5">
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}

            <SidebarMenu className='mt-3'>
                {items.map((item) => {


                    const isActive = url === item.href.url || url.startsWith(`${item.href.url}`);


                    const menuClassName = cn(" flex items-center gap-3 px-3 py-5 ",


                    )

                    return (

                        <>

                            {/* <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={isActive}
                                className="group/collapsible "
                            > */}
                            <SidebarMenuItem className={cn(" flex flex-col flex-1 items-center transition-all duration-100 ease-linear fade-in font-bold",
                                " border-transparent  text-primary",

                                {
                                    "bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container ": isActive,
                                    " hover:bg-primary hover:text-on-primary dark:hover:bg-primary-container dark:hover:text-on-primary-container ": !isActive
                                })}>

                                <SidebarMenuButton tooltip={item.title} className={menuClassName} asChild>




                                    <Link href={item.href} prefetch
                                    >

                                        {item.icon && <item.icon />}






                                        <span className="text-xs   uppercase tracking-widest font-bold">{item.title}</span>

                                    </Link>



                                </SidebarMenuButton>


                            </SidebarMenuItem>
                            {/* </Collapsible> */}

                        </>

                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
