import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, IdCard, LayoutGrid, Shield, Trophy, User, UserCog, Users } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { compliance, dashboard } from '@/routes';
import type { NavItem } from '@/types';
import { index as PlayerIndex } from '@/routes/players';
import { index as TournamentIndex } from '@/routes/tournaments';
import { index as OfficialIndex } from '@/routes/officials';
import { useAuthorization } from '@/hooks/use-authorization';
import {index as RosterIndex} from '@/routes/rosters';



const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
        module: 'Dashboard',
    },
    {
        title: 'Tournaments',
        href: TournamentIndex(),
        icon: Trophy,
        module: "Tournament"
    },
    {
        title: 'Players',
        href: PlayerIndex(),
        icon: Users,
        module: "Player"
    },
    {
        title: "Officials",
        href: OfficialIndex(),
        icon: UserCog,
        module:"Official"
    },
    {
        title: 'Rosters',
        href: RosterIndex(),
        icon: IdCard,
        module:"Roster"

    },
    {
        title: 'Compliance',
        href: compliance(),
        icon: Shield,
        module : "Compliance"
    }
];
const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {

    const { canModule } = useAuthorization();
const visibleItems = mainNavItems.filter(item => canModule(item.module));

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
               
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
              
                <NavMain items={visibleItems} />
            </SidebarContent>
 
            <SidebarFooter >
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
