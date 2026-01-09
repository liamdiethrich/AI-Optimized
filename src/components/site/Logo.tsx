import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "lockup" | "mark";
  className?: string;
  href?: string;
};

export function Logo({ variant = "lockup", className, href = "/" }: LogoProps) {
  const src = variant === "mark" ? "/brand/logo-mark.svg" : "/brand/logo-lockup.svg";
  const alt = variant === "mark" ? "AI Optimized logo" : "AI Optimized";

  const image = (
    <Image
      src={src}
      alt={alt}
      width={variant === "mark" ? 40 : 160}
      height={variant === "mark" ? 40 : 40}
      className={cn("h-8 w-auto", className)}
      priority
    />
  );

  return (
    <Link href={href} className="inline-flex items-center">
      {image}
    </Link>
  );
}
