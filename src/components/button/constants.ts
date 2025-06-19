import type { InjectionKey } from 'vue'

/**
 * Button component constants and injection keys
 */

// Button size type
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Injection keys for ButtonGroup context
export const BUTTON_GROUP_SIZE_KEY: InjectionKey<ButtonSize> =
  Symbol('buttonGroupSize')
export const BUTTON_GROUP_CONTEXT_KEY: InjectionKey<boolean> =
  Symbol('buttonGroupContext')

// Button group constants
export const BUTTON_GROUP_DEFAULTS = {
  size: 'md' as ButtonSize,
  orientation: 'horizontal' as const,
  attached: true,
} as const

// Button constants
export const BUTTON_DEFAULTS = {
  color: 'primary' as const,
  variant: 'filled' as const,
  size: 'md' as ButtonSize,
  isLoading: false,
  asIcon: false,
} as const
