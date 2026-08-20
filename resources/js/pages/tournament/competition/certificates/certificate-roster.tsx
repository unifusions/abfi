import LinkButton from "@/components/ext/link-button"
import PageHeader from "@/components/ext/page-header"
import PdfPreview from "@/components/ext/pdf-preivew"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarInput } from "@/components/ui/sidebar"
import { downloadSingle, emailCertificate } from "@/routes/tournaments/competition/certificates"
import { DownloadIcon, Mail } from "lucide-react"


import { useState } from "react"
import { Document } from 'react-pdf';

export default function CertificateRoster({
    tournament, competition, roster, certificates }) {
    const [selectedCertificate, setSelectedCertificate] = useState();
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
                            onClick={() => setSelectedCertificate(certificate)}
                        >
                            <div className="flex w-full items-center gap-2">
                                <span>{certificate?.recipient_name} </span>{" "}
                                <span className="ml-auto text-xs">{certificate?.snapshot?.recipient?.role} </span>
                            </div>
                            <span className="font-medium">
                                {certificate?.id}
                                <pre>

                                </pre>
                            </span>
                            <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">

                            </span>
                        </div>
                    ))}

                </div>
                <div className="col-span-9 px-4">
                    {selectedCertificate &&
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h3>Certificate #{selectedCertificate?.certificate_number}</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LinkButton href={downloadSingle({
                                        tournament: tournament?.id,
                                        competition: competition?.id,
                                        certificate: selectedCertificate?.id
                                    }).url} target="_blank">
                                        <DownloadIcon />Download Certificate</LinkButton>

                                        
                                    <LinkButton href={emailCertificate({
                                        tournament: tournament?.id,
                                        competition: competition?.id,
                                        certificate: selectedCertificate?.id
                                    }).url} className="bg-secondary">
                                        <Mail />Email Certificate</LinkButton>


                                </div>


                            </div>
                            <div className="w-full">

                                <PdfPreview
                                    fileUrl={selectedCertificate.pdf_url}

                                />

                            </div>
                        </div>}

                </div>
            </div>


        </>
    )
}