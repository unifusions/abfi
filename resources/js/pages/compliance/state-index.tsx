import PageHeader from "@/components/ext/page-header"
import { Button } from "@/components/ui/button"
import { compliance, dashboard } from "@/routes"
import { Edit, Eye, MapPinned, Plus } from "lucide-react"

export default function StateIndex({ states }) {
    return (
        <>
            <PageHeader title="Federation States" subText="Manage federation states and its data"

            >

                {/* <Button size="xl" ><Plus /> Add New State</Button> */}
            </PageHeader>
            <div className="  space-y-10">


                <div className="bg-zinc-50 rounded-xl shadow-sm overflow-hidden flex flex-col">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th
                                        className="px-8 py-4 text-sm   uppercase tracking-[0.15em] font-black">
                                        State Name</th>
                                    <th
                                        className="px-8 py-4 text-sm  uppercase tracking-[0.15em] font-black">
                                        Short Code</th>
                                    <th
                                        className="px-8 py-4 text-sm  uppercase tracking-[0.15em] font-black">
                                        Region</th>


                                    <th
                                        className="px-8 py-4 text-sm  uppercase tracking-[0.15em] font-black text-right">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-body-md divide-y-0">
                                {/* <!-- Row 1 --> */}
                                {states.map((state) => (
                                    <tr id={state.short_code} className="text-zinc-900 group hover:bg-zinc-100 transition-colors border-b border-outline-variant/10">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">

                                                <span className="font-bold ">{state.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 font-mono text-primary font-bold">{state.short_code}</td>
                                        <td className="px-8 py-5  ">{state.region}</td>

                                        <td className="px-8 py-5 text-right ">
                                            <div className="flex items-center justify-end gap-2">
                                                {/* <button
                                                    className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-lg transition-all"
                                                    title="View Profile">
                                                    <Eye />

                                                </button>
                                                <button
                                                    className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-lg transition-all"
                                                    title="Edit State">
                                                    <Edit />

                                                </button> */}
                                            </div>
                                        </td>

                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </>
    )
}

StateIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'State Management', href: "#" }
    ],

}