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


export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    const { url } = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <div className="mt-3"></div>
            <SidebarMenu>
                {items.map((item) => {


                    const isActive = url === item.href.url || url.startsWith(`${item.href.url}`);
 



                    return (


                        <SidebarMenuItem key={item.title} className={cn("transition-all duration-100 ease-linear fade-in",
                            " border-transparent hover:border-l-4 hover:border-red-600",
                            { "bg-white  border-l-4 border-red-600": isActive })}>

                            {/* <SidebarMenuButton
                            asChild
                            isActive={isCurrentUrl(item.href)}
                            tooltip={{ children: item.title }}
                            className="font-sans-serif"
                        > */}
                            <Link href={item.href} prefetch
                                className={cn("flex items-center gap-3 px-3 py-2.5 transition-all duration-200 ease-in-out text-indigo-900",
                                    " ",
                                    { "bg-white ": isActive }
                                )}>

                                {item.icon && <item.icon />}
                                <span className="text-xs font-label uppercase tracking-widest font-bold">{item.title}</span>
                            </Link>


                            {isActive && item.subMenus?.length ? (
                                <SidebarMenuSub className={cn('ms-8 ps-6 space-y-4 py-5',
                                    { "bg-white": isActive }

                                )}>
                                    {item.subMenus.map((item) => (
                                        <SidebarMenuSubItem key={item.title} className='font-display text-xs uppercase font-bold hover:text-primary transition-all'>

                                            <Link href={item.href?.url}>{item.title} </Link>

                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            ) : null}
                            {/* </SidebarMenuButton> */}
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
