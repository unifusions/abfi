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

                    const menuClassName = cn(" flex items-center gap-3 px-3 py-5 transition-all duration-200 ease-in-out text-indigo-900",
                        "hover:bg-white rounded-none ",
                        { "bg-white ": isActive }
                    )


                    return (

                        <>

                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={isActive}
                                className="group/collapsible "
                            >
                                <SidebarMenuItem className={cn(" flex flex-col flex-1 items-center transition-all duration-100 ease-linear fade-in",
                                    " border-transparent hover:border-l-4 hover:border-red-600 hover:bg-white",
                                    { "bg-white  border-l-4 border-red-600 hover:bg-white": isActive })}>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title} className={menuClassName} asChild>
                                        
                                            {item?.subMenus ?

                                                <div className={menuClassName}>

                                                    {item.icon && <item.icon className='h-6 w-6'/>}
                                                    <span className="text-xs font-label uppercase tracking-widest font-bold">{item.title}</span>
                                                    {item?.subMenus && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}

                                                </div>

                                                :


                                                <Link href={item.href} prefetch
                                                    className={menuClassName}>

                                                    {item.icon && <item.icon />}






                                                    <span className="text-xs font-label uppercase tracking-widest font-bold">{item.title}</span>
                                                    {item?.subMenus && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                                                </Link>
                                            }


                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className='bg-white hover:bg-white' >
                                        <SidebarMenuSub>
                                            {item?.subMenus?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link href={subItem.href}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                        </>

                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
