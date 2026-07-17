import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { useCurrentUrl } from "@/hooks/use-current-url";
import { cn } from "@/lib/utils";
 
 
import { Link } from "@inertiajs/react";
import { Group, Logs, MapPinned, Users } from "lucide-react";
import { PropsWithChildren } from "react";
import { index as logIndex } from "@/routes/compliance/logs";
import { index  as userIndex} from "@/routes/compliance/users";
 
import organizations from "@/routes/compliance/organizations";


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
        title: 'Audit Logs',
        href:  logIndex().url,
        icon: Logs
    },

]

export default function ComplianceLayout({ children }: PropsWithChildren) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <>
            {/* <div className="mt-3 h-12 border-t flex  items-center bg-primary/10 px-2  py-0 ">
                <nav className="flex items-center py-0  ">

                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            size="sm"
                            variant="ghost"
                            asChild

                            className={cn(' justify-start     h-12 hover:bg-secondary text-md rounded-none hover:text-white transition-all', {
                                'bg-secondary   font-display  text-white font-semibold': isCurrentUrl(item.href),
                            })}
                        >
                            <Link href={item.href} className=" " >
                                {item.icon && (
                                        <item.icon className="h-4 w-4" />
                                    )}
                                {item.title}
                            </Link>
                        </Button>
                    ))}
                </nav>
            </div> */}


            <div className=" py-3 ">



                <div className="flex flex-col lg:flex-row   border-t">

                    <aside className="w-full min-w-48 max-w-60  h-screen ">
                        {/* <SidebarGroupLabel className="uppercase border-b rounded-none">Compliance Menu</SidebarGroupLabel> */}
                        <nav
                            className="flex flex-col  space-x-0"
                            aria-label="Settings"
                        >
                            {menuItems.map((item, index) => (
                                <Link href={item.href}
                                    key={index}



                                    className={cn('h-12 w-full transition-all' ,
                                        'flex items-center gap-2 pl-2 flex-row justify-start rounded-none font-display font-normal  hover:text-secondary', {
                                        'text-secondary font-bold': isCurrentUrl(item.href),
                                    })}
                                >
                                   

                                        {item.icon && (
                                            <item.icon className="h-4 w-4" />
                                        )}
                                        {item.title}

                                   

                                </Link>
                            ))}
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