import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles with WCAG AA compliant contrast and proper spacing
  'inline-flex items-center justify-center rounded-rustic font-semibold transition-rustic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3A2E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2',
  {
    variants: {
      variant: {
        primary: 
          'bg-[#0A3A2E] border-[#0A3A2E] text-white hover:bg-[#083529] hover:border-[#083529] shadow-rustic hover:shadow-rustic-lg',
        secondary: 
          'bg-[#3E2723] border-[#3E2723] text-white hover:bg-[#2E1A1A] hover:border-[#2E1A1A] shadow-rustic hover:shadow-rustic-lg',
        outline: 
          'border-[#0A3A2E] text-[#0A3A2E] bg-white hover:bg-[#0A3A2E] hover:text-white hover:border-[#083529]',
        ghost: 
          'border-transparent text-[#0F0F0F] hover:bg-[#FAFAF8] hover:text-[#0A3A2E]',
        link: 
          'border-transparent text-[#0A3A2E] underline-offset-4 hover:underline p-0 h-auto font-normal',
        accent:
          'bg-[#F57C00] border-[#F57C00] text-white hover:bg-[#E65100] hover:border-[#E65100] shadow-rustic hover:shadow-rustic-lg',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };