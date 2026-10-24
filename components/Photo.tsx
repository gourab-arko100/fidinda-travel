import Image from "next/image";
import { unsplash } from "@/lib/images";

type PhotoProps = {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
};

/** Cover photo that fills its (position: relative) parent. */
export default function Photo({ id, alt, className, sizes = "100vw", priority, width = 1600 }: PhotoProps) {
  return (
    <Image
      src={unsplash(id, width)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`photo${className ? ` ${className}` : ""}`}
    />
  );
}
