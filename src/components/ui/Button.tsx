import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "link" | "light";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-white border border-primary hover:bg-primary/90 shadow-lg shadow-emerald-950/10",
  secondary:
    "bg-emerald-500 text-white border border-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-950/10",
  outline:
    "border border-emerald-800/25 bg-white text-primary hover:bg-emerald-50 hover:text-primary",
  ghost:
    "bg-transparent text-foreground hover:bg-emerald-950/5",
  link:
    "bg-transparent text-primary underline-offset-4 hover:underline shadow-none border-transparent px-0",
  light:
    "bg-white text-primary border border-white hover:bg-emerald-50 hover:text-primary shadow-lg shadow-black/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 py-2.5 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-[3.25rem] px-7 py-3 text-base",
  icon: "h-10 w-10 p-0",
};

export const buttonClasses = ({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) =>
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, type, ...props }, ref) => {
    const classes = buttonClasses({ variant, size, className });

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        ...props,
        ref,
        className: cn(classes, child.props.className),
      } as any);
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={type ?? "button"}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
