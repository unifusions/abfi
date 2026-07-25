import { Camera } from "lucide-react";
import { useRef, useState } from "react";

export interface UploadedMedia {
    id: string;
    name: string;
    url: string;
    mime_type: string;
    extension: string;
    size: number;
}

interface ProfileUploaderProps {
    value?: UploadedMedia | null;
    onChange: (media: UploadedMedia | null) => void;
    accept?: string;
    disabled?: boolean;
    uploadUrl?: string;
}

export default function ProfileUploader({
    value = null,
    onChange,
    accept = "image/*",
    disabled = false,
    uploadUrl = "/media/upload",
}: ProfileUploaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [uploading, setUploading] = useState(false);
    const [dragging, setDragging] = useState(false);

    async function upload(file: File) {
        setUploading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const csrf = (
                document.querySelector(
                    'meta[name="csrf-token"]'
                ) as HTMLMetaElement
            )?.content;

            const response = await fetch(uploadUrl, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "X-CSRF-TOKEN": csrf,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const json = await response.json();

            onChange(json.data);
        } catch (e) {
            console.error(e);
            alert("Upload failed.");
        } finally {
            setUploading(false);
        }
    }

    function handleFiles(files: FileList | null) {
        if (!files?.length) return;

        upload(files[0]);
    }

    return (
        <div className="space-y-4">
            <div
                onClick={() => !disabled && inputRef.current?.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    if (!disabled) setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);

                    if (disabled) return;

                    handleFiles(e.dataTransfer.files);
                }}
                className={[
                    "relative flex h-max w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed transition",
                    dragging
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/30",
                    disabled ? "opacity-50 cursor-not-allowed" : "",
                ].join(" ")}
            >
                <input
                    ref={inputRef}
                    type="file"
                    hidden
                    accept={accept}
                    disabled={disabled}
                    onChange={(e) => handleFiles(e.target.files)}
                />

                {uploading ? (
                    <div className="text-sm text-muted-foreground">
                        Uploading...
                    </div>
                ) : value ? (
                    <>
                    
                        <img
                            src={value.url}
                            alt={value.name}
                            className="aspect-3/4 inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition hover:opacity-100">
                            <span className="rounded bg-white px-4 py-2 text-sm font-medium">
                                Replace Photo
                            </span>
                        </div>
                       
                    </>
                ) : (
                    <div className="flex  flex-col items-center space-y-3 py-3">
                        {/* <div className="mb-2 text-4xl">📷</div> */}
                        <div><Camera />
                        </div>
                        <div className="font-medium">
                            Click or Drag Photo Here
                        </div>

                        <div className="mt-1 text-sm text-muted-foreground">
                            JPG, PNG
                        </div>
                    </div>
                )}
            </div>

            {value && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => onChange(null)}
                        className="text-sm text-red-600 hover:underline"
                    >
                        Remove Photo
                    </button>
                </div>
            )}
        </div>
    );
}