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


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
        
    },
    {
        title: 'Tournaments',
        href: TournamentIndex(),
        icon: Trophy,
        permission: "tournament.index"
    },
    {
        title: 'Players',
        href: PlayerIndex(),
        icon: Users,
        permission: "player.index"
    },
    {
        title: "Officials",
        href: OfficialIndex(),
        icon: UserCog,
        permission:"official.index"
    },
    {
        title: 'Rosters',
        href: '#',
        icon: IdCard,
    },
    {
        title: 'Compliance',
        href: compliance(),
        icon: Shield,
        permission : "compliance.index"
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
               
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter >
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
