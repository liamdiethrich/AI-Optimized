import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

const variantStyles: Record<"primary" | "secondary", string> = {
  primary: "aio-btn--primary",
  secondary: "aio-btn--secondary",
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const classes = [
    "aio-btn text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Link className={classes} {...props} />;
}
