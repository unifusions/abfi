import PageHeader from "@/components/ext/page-header"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { Switch } from "@base-ui/react"

export default function CertificateRoster({ roster, certificates }) {
    return (
        <>

            <PageHeader title="Roster Certificates" subText={`Certificate List for ${roster?.name}`}>

            </PageHeader>

            <div className="grid grid-cols-12 ">
                <div className="col-span-3 border-r">

                    {certificates.map((certificate) => (
                        <div

                            key={certificate?.id}
                            className="flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                            <div className="flex w-full items-center gap-2">
                                <span>{certificate?.recipient_name} </span>{" "}
                                <span className="ml-auto text-xs">{certificate?.snapshot?.recipient?.role} </span>
                            </div>
                            <span className="font-medium">
                                <pre>

                                </pre>
                            </span>
                            <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">

                            </span>
                        </div>
                    ))}

                </div>
                <div className="col-span-9 px-4">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h3>Certificate #</h3>
                        </div>
                        <div className="gap-4">
                            <Button >Download Certificate</Button>
                            <Button >Email Certificate</Button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}