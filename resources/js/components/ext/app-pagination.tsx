import { Link } from '@inertiajs/react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AppPagination({ paginationData }) {
  // Hide component entirely if there is only one page (Previous, 1, Next)
  const { links, meta} = paginationData;
const {from, to, total,prev_page_url, next_page_url } = meta;
   const pageNumbersOnly = links.length>= 1 && links.slice(1, -1);

  if (pageNumbersOnly.length <= 1) return null;

  return (

    <div className="bg-zinc-50 px-6 py-4 flex items-center justify-between">
      <p className="font-body text-xs text-on-surface-variant">Showing <span
        className="font-bold text-primary">{from}-{to}</span> of {total} entries</p>

      <div>
{pageNumbersOnly.length >= 2 &&

 <Pagination className="mt-6">
           <PaginationContent>



            <PaginationItem>
              <PaginationPrevious href={prev_page_url || '#'} className={!prev_page_url ? "pointer-events-none opacity-50" : ""} />
            </PaginationItem>
            {pageNumbersOnly.map((link, index) =>
              <PaginationItem key={index}>
                <PaginationLink href={link.url}>{link.page}</PaginationLink>
              </PaginationItem>
            )}



            {/* <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
            <PaginationItem>
              <PaginationNext href={next_page_url || '#'} className={!next_page_url ? "pointer-events-none opacity-50" : ""} />
            </PaginationItem>

          </PaginationContent>
        </Pagination>

}
       
      </div>

    </div>


  );
}





//  <PaginationContent>
//               <PaginationItem key={key}>
//                     <PaginationPrevious
//                       asChild
//                       className={!link.url ? "pointer-events-none opacity-50" : ""}
//                     >
//                       <Link href={link.url || "#"} preserveScroll />
//                     </PaginationPrevious>
//                   </PaginationItem>
                  
//             {links.map((link, key) => {
//               // Identify if it's the previous button, next button, or an ellipsis
//               const isPrevious = link.label.includes('Previous') || link.label.includes('&laquo;');
//               const isNext = link.label.includes('Next') || link.label.includes('&raquo;');
//               const isEllipsis = link.label === '...';

//               // 1. Render Ellipsis component
//               if (isEllipsis) {
//                 return (
//                   <PaginationItem key={key}>
//                     <PaginationEllipsis />
//                   </PaginationItem>
//                 );
//               }

//               // 2. Render Previous Button
//               if (isPrevious) {
//                 return (
//                   <PaginationItem key={key}>
//                     <PaginationPrevious
//                       asChild
//                       className={!link.url ? "pointer-events-none opacity-50" : ""}
//                     >
//                       <Link href={link.url || "#"} preserveScroll />
//                     </PaginationPrevious>
//                   </PaginationItem>
//                 );
//               }

//               // 3. Render Next Button
//               if (isNext) {
//                 return (
//                   <PaginationItem key={key}>
//                     <PaginationNext
//                       asChild
//                       className={!link.url ? "pointer-events-none opacity-50" : ""}
//                     >
//                       <Link href={link.url || "#"} preserveScroll />
//                     </PaginationNext>
//                   </PaginationItem>
//                 );
//               }

//               // 4. Render Standard Page Number Links
//               return (
//                 <PaginationItem key={key}>
//                   <PaginationLink
//                     asChild
//                     isActive={link.active}
//                   >
//                     <Link href={link.url} preserveScroll>
//                       {link.label}
//                     </Link>
//                   </PaginationLink>
//                 </PaginationItem>
//               );
//             })}
//           </PaginationContent>