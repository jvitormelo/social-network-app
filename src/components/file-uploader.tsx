import { UploadIcon, X } from "lucide-react";
import { type ComponentProps, useState, useRef } from "react";
import { Card } from "./ui/card";
import Image from "next/image";

export function FileUploader(
  props: ComponentProps<"input"> & { img?: string },
) {
  const ref = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgSrc] = useState<string | null>(props.img ?? null);

  return (
    <Card className="relative flex aspect-video">
      {imgUrl ? (
        <>
          {" "}
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-70 text-red-500"
          >
            <X
              onClick={() => {
                setImgSrc(null);
                if (ref.current) ref.current.value = "";
              }}
            />
          </button>
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={"Imagem"}
            src={imgUrl}
          />
        </>
      ) : (
        <label
          htmlFor="file-upload"
          className="flex h-full w-full cursor-pointer items-center justify-center gap-2 bg-black"
        >
          <UploadIcon className="h-6 w-6" />
          <span>Upload</span>
        </label>
      )}

      <input
        ref={ref}
        id="file-upload"
        type="file"
        className="hidden"
        accept="image/*"
        {...props}
        onChange={(e) => {
          const [file] = e.target.files ?? [];

          if (file) {
            setImgSrc(URL.createObjectURL(file));
          }
        }}
      />
    </Card>
  );
}
