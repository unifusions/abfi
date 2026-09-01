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

type Props = {
  paginationData?: any
}
export default function AppPagination({ paginationData }: Props) {
  // Hide component entirely if there is only one page (Previous, 1, Next)
  const { links, meta } = paginationData;
  const { from, to, total, prev_page_url, next_page_url } = meta;
  const { next, prev } = links;
  const pageNumbersOnly = meta.links.length >= 1 && meta.links.slice(1, -1);

  if (pageNumbersOnly.length < 1) return null;

  return (

    <div className="bg-zinc-50 px-6 py-2 flex items-center justify-between  ">
      {from && to ? <p className="font-body text-xs text-on-surface-variant">Showing <span
        className="font-bold text-primary">{from ?? 0}-{to ?? 0}</span> of {total} entries
      </p>
        : <p className="font-body text-xs text-on-surface-variant">Showing  {total} entries
        </p>}

    

      <div>
        {meta.links &&

          <Pagination className="mt-3">
            <PaginationContent>


              <PaginationItem>
                <PaginationPrevious href={prev_page_url || prev || '#'} className={!(prev_page_url || prev) ? "pointer-events-none opacity-50" : ""} />
              </PaginationItem>
              {pageNumbersOnly.map((link, index) =>
                <PaginationItem key={index}  >
                  <PaginationLink href={link.url} className={link.active && 'bg-primary text-white'} >{link.page} </PaginationLink>
                </PaginationItem>
              )}



              {/* <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
              <PaginationItem>
                <PaginationNext href={next_page_url || next || '#'} className={!(next_page_url || next) ? "pointer-events-none opacity-50" : ""} />
              </PaginationItem>

            </PaginationContent>
          </Pagination>

        }

      </div>

    </div>


  );
}




