/**
 * Badge component constants
 */

// Badge size type
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg'

// Badge constants
export const BADGE_DEFAULTS = {
  color: 'primary' as const,
  variant: 'filled' as const,
  size: 'md' as BadgeSize,
  rounded: false,
} as const
