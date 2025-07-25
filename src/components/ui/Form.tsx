import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Input Component
const inputVariants = cva(
  'flex w-full rounded-rustic border border-[#333333] bg-white px-3 py-2 text-sm text-[#0F0F0F] transition-rustic file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3A2E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[#333333] focus-visible:border-[#0A3A2E]',
        error: 'border-[#C62828] focus-visible:border-[#C62828] focus-visible:ring-[#C62828]',
        success: 'border-[#2E7D32] focus-visible:border-[#2E7D32] focus-visible:ring-[#2E7D32]',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

// Textarea Component
const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-rustic border border-[#333333] bg-white px-3 py-2 text-sm text-[#0F0F0F] transition-rustic placeholder:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3A2E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[#333333] focus-visible:border-[#0A3A2E]',
        error: 'border-[#C62828] focus-visible:border-[#C62828] focus-visible:ring-[#C62828]',
        success: 'border-[#2E7D32] focus-visible:border-[#2E7D32] focus-visible:ring-[#2E7D32]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// Select Component
const selectVariants = cva(
  'flex h-10 w-full items-center justify-between rounded-rustic border border-[#333333] bg-white px-3 py-2 text-sm text-[#0F0F0F] transition-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[#333333] focus:border-[#0A3A2E]',
        error: 'border-[#C62828] focus:border-[#C62828] focus:ring-[#C62828]',
        success: 'border-[#2E7D32] focus:border-[#2E7D32] focus:ring-[#2E7D32]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <select
        className={cn(selectVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

// Label Component
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none text-[#0F0F0F] peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
Label.displayName = 'Label';

// Form Field Component
interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, hint, required, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <Label className="block">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </Label>
        )}
        {children}
        {hint && !error && (
          <p className="text-xs text-[#333333]">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-[#C62828]">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = 'FormField';

// Checkbox Component
const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="checkbox"
    className={cn(
      'h-4 w-4 rounded border border-[#333333] text-[#0A3A2E] focus:ring-2 focus:ring-[#0A3A2E] focus:ring-offset-2 transition-rustic',
      className
    )}
    ref={ref}
    {...props}
  />
));
Checkbox.displayName = 'Checkbox';

// Radio Component
const Radio = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="radio"
    className={cn(
      'h-4 w-4 border border-[#333333] text-[#0A3A2E] focus:ring-2 focus:ring-[#0A3A2E] focus:ring-offset-2 transition-rustic',
      className
    )}
    ref={ref}
    {...props}
  />
));
Radio.displayName = 'Radio';

export {
  Input,
  Textarea,
  Select,
  Label,
  FormField,
  Checkbox,
  Radio,
  inputVariants,
  textareaVariants,
  selectVariants,
};