<?php

namespace App\Domains\Venue\Controllers;
use App\Domains\Venue\Models\Venue;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class VenueSearchController extends Controller
{
    public function __invoke(Request $request)
    {

        // $this->service->publish($tournament);

        $search = $request->input('search');
        $venues = Venue::search($search)
            ->get();
  $formattedVenues = [];
            if(!empty($venues))
            {
        $formattedVenues = $venues->map(function ($venue) {
            return [
                'id' => $venue->id,
                'name' => $venue->name,
                'state_name' => $venue->state->name ?? null,
                'state_code' => $venue->state->short_code ?? null,
                'label' => $venue->name . ',' . $venue->state->short_code,
                'value' => $venue->id
            ];
        });}


 

        return response()->json(  $formattedVenues);
    }
}

//  --background: oklch(0.145 0 0);
//     --foreground: oklch(0.985 0 0);
//     --card: oklch(0.145 0 0);
//     --card-foreground: oklch(0.985 0 0);
//     --popover: oklch(0.145 0 0);
//     --popover-foreground: oklch(0.985 0 0);
//     --primary: oklch(0.985 0 0);
//     --primary-foreground: oklch(0.205 0 0);
//     --secondary: oklch(0.269 0 0);
//     --secondary-foreground: oklch(0.985 0 0);
//     --muted: oklch(0.269 0 0);
//     --muted-foreground: oklch(0.708 0 0);
//     --accent: oklch(0.269 0 0);
//     --accent-foreground: oklch(0.985 0 0);
//     --destructive: oklch(0.396 0.141 25.723);
//  --accent-foreground: oklch(0.205 0 0);
//     --destructive: oklch(0.577 0.245 27.325);
// --border: oklch(0.922 0 0);
//     --input: oklch(0.922 0 0);
//     --ring: oklch(0.87 0 0);
//     --chart-1: oklch(0.646 0.222 41.116);
//     --chart-2: oklch(0.6 0.118 184.704);
//     --chart-3: oklch(0.398 0.07 227.392);



//  --background: oklch(0.145 0 0);
//     --foreground: oklch(0.985 0 0);
//     --card: oklch(0.145 0 0);
//     --card-foreground: oklch(0.985 0 0);
//     --popover: oklch(0.145 0 0);
//     --popover-foreground: oklch(0.985 0 0);
//     --primary: oklch(0.985 0 0);
//     --primary-foreground: oklch(0.205 0 0);
//     --secondary: oklch(0.269 0 0);
//     --secondary-foreground: oklch(0.985 0 0);
//     --muted: oklch(0.269 0 0);
//     --muted-foreground: oklch(0.708 0 0);
//     --accent: oklch(0.269 0 0);
//     --accent-foreground: oklch(0.985 0 0);
//     --destructive: oklch(0.396 0.141 25.723);
//      --background: oklch(0.145 0 0);
//     --foreground: oklch(0.985 0 0);
//     --card: oklch(0.145 0 0);
//     --card-foreground: oklch(0.985 0 0);
//     --popover: oklch(0.145 0 0);
//     --popover-foreground: oklch(0.985 0 0);
//     --primary: oklch(0.985 0 0);
//     --primary-foreground: oklch(0.205 0 0);
//     --secondary: oklch(0.269 0 0);
//     --secondary-foreground: oklch(0.985 0 0);
//     --muted: oklch(0.269 0 0);
//     --muted-foreground: oklch(0.708 0 0);
//     --accent: oklch(0.269 0 0);
//     --accent-foreground: oklch(0.985 0 0);
//     --destructive: oklch(0.396 0.141 25.723);


// import { useEffect, useRef, useState } from "react";
// import { router, useHttp } from "@inertiajs/react";
// import FormInput from "./form-input";
// import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "../ui/popover";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { ChevronsUpDown, Loader } from "lucide-react";


// export default function CreatableSelect({ searchApiUrl }) {



//     const anchorRef = useRef(null);

//     const [datas, setDatas] = useState([]);
//     const [dialogOpen, setDialogOpen] = useState(false)
//     const { data, setData, get, processing, errors } = useHttp({
//         search: ''
//     });


//     const fetchDatas = () => {


//         get(searchApiUrl, {

//             onSuccess: (response) => {
//                 setDatas(response);

//             }

//         },
//     )


//     }


//     useEffect(() => {

//         if (data.search.length < 2) {
//             setDatas([]);
//             return;
//         }

//         const delayTimer = setTimeout(() => {
//             fetchDatas();
//             setDialogOpen(true)

//         }, 500);


//         // debounce then fetch
//     }, [data.search]);
// useEffect(() => {
//         if (!processing && anchorRef.current) {
//             anchorRef.current.focus();
//         }
//     }, [processing]);
//     return (
//         <>

//  <div ref={anchorRef} >
//                 <FormInput

//                     value={data.search}
//                     onChange={(e) => { setData('search', e.target.value); }}
//                 />
//             </div>

//             <Popover open={dialogOpen} onOpenChange={setDialogOpen} >

//                 <PopoverContent className="w-80" anchor={anchorRef} onOpenAutoFocus={(e) => e.preventDefault()}
//                     onCloseAutoFocus={(e) => e.preventDefault()}  >
//                     {processing ? <Loader className="animate-spin
// " /> : 

//                         <div className="grid gap-4">

//                                     {JSON.stringify(datas)}



//                         </div>
//                     }
//                 </PopoverContent>
//             </Popover>



//         </>
//     )
// }