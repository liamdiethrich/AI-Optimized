import type { HTMLAttributes } from "react";

const variantStyles: Record<"default" | "muted" | "surface", string> = {
  default: "",
  muted: "bg-slate-50/80",
  surface: "bg-white/80 border border-slate-200/60 shadow-sm",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  variant?: "default" | "muted" | "surface";
};

export function Section({
  as: Component = "section",
  variant = "default",
  className,
  ...props
}: SectionProps) {
  const classes = [
    "py-16 sm:py-20",
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes} {...props} />;
}
