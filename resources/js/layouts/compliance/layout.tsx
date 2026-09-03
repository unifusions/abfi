import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { useCurrentUrl } from "@/hooks/use-current-url";
import { cn } from "@/lib/utils";
 
 
import { Link, usePage } from "@inertiajs/react";
import { Award, Group, KeyRound, Logs, MapPinned, Users } from "lucide-react";
import { PropsWithChildren } from "react";
import { index as logIndex } from "@/routes/compliance/logs";
import { index  as userIndex} from "@/routes/compliance/users";
 
import organizations from "@/routes/compliance/organizations";
import roles from "@/routes/compliance/roles";
 
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { dashboard, compliance } from "@/routes";
import { index as categoryIndex } from "@/routes/compliance/categories";
 


const menuItems = [
    {
        title: 'User Management',
        href: userIndex().url,
        icon: Users

    },
    {
        title: 'Association Management',
        href: organizations.index().url,
        icon:Group
    }, 
     

    {
        title : 'Roles & Permissions',
        href : roles.index().url,
        icon : KeyRound
    },

     {
            title: 'Tournament Categories',
            href: categoryIndex().url,
            module: "Tournament",
            icon: Award
        },

    // {
    //     title: 'Audit Logs',
    //     href:  logIndex().url,
    //     icon: Logs
    // },

]

export default function ComplianceLayout({ children }: PropsWithChildren) {
    const { isCurrentUrl } = useCurrentUrl();
 const { url } = usePage();
    useSetBreadcrumbs([
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
    ])
    return (
        <>
          


            <div className=" py-3 ">



                <div className="flex flex-col lg:flex-row   border-t">

                    <aside className="w-full min-w-48 max-w-60  h-screen border-r">
                        {/* <SidebarGroupLabel className="uppercase border-b rounded-none">Compliance Menu</SidebarGroupLabel> */}
                        <nav
                            className="flex flex-col  space-x-0"
                            aria-label="Settings"
                        >
                            {menuItems.map((item, index) => {
                                const isActive = url === item.href || url.startsWith(`${item.href}`);
                                return (
                                <Link href={item.href}
                                    key={index}



                                    className={cn('h-12 w-full transition-all' ,
                                        'flex items-center gap-2 pl-2 flex-row justify-start rounded-none font-display font-normal  hover:text-secondary', {
                                        'text-secondary font-bold': isCurrentUrl(item.href) || isActive,
                                    })}
                                >
                                   

                                        {item.icon && (
                                            <item.icon className="h-4 w-4" />
                                        )}
                                        {item.title}

                                   

                                </Link>
                            )})}
                        </nav>
                    </aside>

                    <Separator className="  lg:hidden" />

                    <div className="pt-3  flex-1 ">

                        {children}

                    </div>
                </div>
            </div>


        </>
    )
}