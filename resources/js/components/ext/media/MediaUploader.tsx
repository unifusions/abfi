// MediaUploader.tsx
// Skeleton production-ready component (abbreviated due chat/tool limits)
// Extend with your project-specific UI.

import React, {useRef, useState} from "react";

export interface UploadedMedia {
  id:string;
  name:string;
  url:string;
  mime_type:string;
  extension:string;
  size:number;
  width?:number;
  height?:number;
  collection?:string;
}

interface Props{
  value?:UploadedMedia[];
  onChange:(files:UploadedMedia[])=>void;
  accept?:string;
  multiple?:boolean;
  maxFiles?:number;
  disabled?:boolean;
}

export default function MediaUploader({
  value=[],
  onChange,
  accept="*/*",
  multiple=false,
  maxFiles=10,
  disabled=false
}:Props){

  const inputRef=useRef<HTMLInputElement>(null);
  const [uploading,setUploading]=useState(false);

  async function upload(files:FileList|null){
    if(!files) return;
    setUploading(true);

    const uploaded:UploadedMedia[]=[...value];

    for(const file of Array.from(files).slice(0,maxFiles)){
      const fd=new FormData();
      fd.append("file",file);

      const token=(document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;

      const res=await fetch("/media/upload",{
        method:"POST",
        headers:{
          "X-CSRF-TOKEN":token,
          "Accept":"application/json"
        },
        body:fd
      });

      if(!res.ok) continue;

      const json=await res.json();
      uploaded.push(json.data);
    }

    onChange(uploaded);
    setUploading(false);
  }

  function remove(id:string){
    onChange(value.filter(x=>x.id!==id));
  }

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer"
        onClick={()=>inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          hidden
          type="file"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          onChange={e=>upload(e.target.files)}
        />

        {uploading?"Uploading...":"Click to upload or drag files here"}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {value.map(file=>(
          <div key={file.id} className="border rounded p-2">
            {file.mime_type.startsWith("image/")
              ? <img src={file.url} className="aspect-square object-cover rounded h-32 w-32"/>
              : <div className="h-32 flex items-center justify-center">PDF</div>}
            <div className="mt-2 text-xs truncate">{file.name}</div>
            <button
              type="button"
              className="text-red-500 text-xs mt-2"
              onClick={()=>remove(file.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
