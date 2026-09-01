import PageHeader from "@/components/ext/page-header"
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { dashboard } from "@/routes"
import {compliance} from "@/routes";
import { BreadcrumbItem } from "@/types";
import { Link } from "@inertiajs/react";
import { Building, Key, Users } from "lucide-react";


export const complianceBreadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: dashboard()  },
    { title: 'Compliance', href: compliance().url },
];


export default function ComplianceIndex({ users, roles, orgs }) {

    useSetBreadcrumbs(complianceBreadcrumbs);

    const stats = [
        {
            label: 'Total Users',
            value: users,
            icon: Users,
            // href: compliance?.users?.index().url
        },
        {
            label: 'Associations',
            value: orgs,
            icon: Building,
            // href: compliance?.organizations.index().url

        },
        {
            label: 'User Roles',
            value: roles,
            icon: Key,
            // href: compliance?.roles.index().url
        },


    ];

    return (
        <div className="ps-6">
            <PageHeader title="Compliance" subText="Manage your users, states and see audit trials">

            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) =>
                    <Link href={stat?.href} key={stat.label}>
                        <div
                            className="bg-zinc-50 p-6  relative overflow-hidden group shadow-sm border-l-4 border-primary">
                            <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                            <h4 className="text-primary font-headline text-4xl font-black mt-2">{stat.value}</h4>
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                                {stat.icon && <stat.icon className="text-primary h-20 w-20" />}

                            </div>
                        </div>

                    </Link>
                )}


            </div>

        </div>
    )
}
 