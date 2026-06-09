export const buttonVariants = {
  primary:
    "tw:inline-flex tw:items-center tw:justify-center tw:font-medium tw:transition-opacity tw:bg-primary tw:text-primary-foreground tw:hover:opacity-90",
  secondary:
    "tw:inline-flex tw:items-center tw:justify-center tw:font-medium tw:transition-colors tw:border tw:border-primary tw:text-primary tw:bg-transparent tw:hover:bg-primary tw:hover:text-primary-foreground",
  ghost:
    "tw:inline-flex tw:items-center tw:justify-center tw:font-medium tw:transition-colors tw:text-text tw:bg-transparent tw:hover:bg-neutral-100",
} as const;

export const buttonSizes = {
  sm: "tw:px-3 tw:py-1.5 tw:text-sm tw:rounded-sm",
  md: "tw:px-4 tw:py-2 tw:text-base tw:rounded-md",
  lg: "tw:px-6 tw:py-3 tw:text-lg tw:rounded-lg",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;
