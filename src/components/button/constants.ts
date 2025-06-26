/**
 * Button component constants
 */

// Button size type
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Button constants
export const BUTTON_DEFAULTS = {
  color: 'primary' as const,
  variant: 'filled' as const,
  size: 'md' as ButtonSize,
  isLoading: false,
  asIcon: false,
} as const
