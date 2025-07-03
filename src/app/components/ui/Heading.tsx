import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-sans font-semibold leading-tight text-gray-900 dark:text-gray-100",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-5xl",
      },
      weight: {
        normal: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "lg",
      weight: "semibold",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, as: Component = "h1", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size, weight, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
