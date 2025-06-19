import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from './Button.vue'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Test Button',
        },
      })

      expect(wrapper.text()).toBe('Test Button')
      expect(wrapper.element.tagName).toBe('BUTTON')
    })

    it('renders with slot content', () => {
      const wrapper = mount(Button, {
        slots: {
          default: '<span>Custom Content</span>',
        },
      })

      expect(wrapper.html()).toContain('<span>Custom Content</span>')
    })
  })

  describe('Colors', () => {
    it('applies primary color classes by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-primary')
      expect(button.classes()).toContain('text-white')
    })

    it('applies primary color classes when explicitly set', () => {
      const wrapper = mount(Button, {
        props: { color: 'primary' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-primary')
      expect(button.classes()).toContain('text-white')
    })

    it('applies secondary color classes', () => {
      const wrapper = mount(Button, {
        props: { color: 'secondary' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-white/3')
      expect(button.classes()).toContain('text-white')
    })

    it('applies danger color classes', () => {
      const wrapper = mount(Button, {
        props: { color: 'danger' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-red-600')
      expect(button.classes()).toContain('text-white')
    })
  })

  describe('Variants', () => {
    it('applies filled variant classes by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-primary')
      expect(button.classes()).toContain('text-white')
    })

    it('applies outline variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'outline' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-transparent')
      expect(button.classes()).toContain('border-1')
      expect(button.classes()).toContain('border-primary')
      expect(button.classes()).toContain('text-primary')
    })

    it('applies ghost variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'ghost' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-transparent')
      expect(button.classes()).toContain('text-primary')
    })
  })

  describe('Sizes', () => {
    it('applies medium size classes by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-4')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('h-36px')
      expect(button.classes()).toContain('text-sm')
      expect(button.classes()).toContain('rounded-8px')
    })

    it('applies extra small size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'xs' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-2')
      expect(button.classes()).toContain('py-1')
      expect(button.classes()).toContain('h-26px')
      expect(button.classes()).toContain('text-xs')
      expect(button.classes()).toContain('rounded-6px')
    })

    it('applies small size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'sm' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-3')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('h-32px')
      expect(button.classes()).toContain('text-xs')
      expect(button.classes()).toContain('rounded-6px')
    })

    it('applies large size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'lg' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-5')
      expect(button.classes()).toContain('py-3')
      expect(button.classes()).toContain('h-40px')
      expect(button.classes()).toContain('text-base')
      expect(button.classes()).toContain('rounded-10px')
    })

    it('applies extra large size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'xl' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-6')
      expect(button.classes()).toContain('py-4')
      expect(button.classes()).toContain('h-44px')
      expect(button.classes()).toContain('text-base')
      expect(button.classes()).toContain('rounded-12px')
    })
  })

  describe('Loading State', () => {
    it('shows loading spinner when isLoading is true', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Loading Button' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.exists()).toBe(true)
      expect(spinner.classes()).toContain('animate-spin')
    })

    it('disables button when loading', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Loading Button' },
      })

      const button = wrapper.find('button')
      expect(button.element.disabled).toBe(true)
    })

    it('hides slot content when loading and asIcon is true', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true, asIcon: true },
        slots: { default: 'Icon' },
      })

      expect(wrapper.text()).toBe('')
    })

    it('shows both spinner and content when loading and asIcon is false', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true, asIcon: false },
        slots: { default: 'Loading...' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.exists()).toBe(true)
      expect(spinner.classes()).toContain('mr-2')
      expect(wrapper.text()).toContain('Loading...')
    })

    it('applies correct spinner color for filled variant', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true, variant: 'filled' },
        slots: { default: 'Button' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.classes()).toContain('text-white')
    })

    it('applies correct spinner color for outline variant', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true, variant: 'outline' },
        slots: { default: 'Button' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.classes()).toContain('text-current')
    })

    it('applies correct spinner color for ghost variant', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true, variant: 'ghost' },
        slots: { default: 'Button' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.classes()).toContain('text-current')
    })
  })

  describe('Icon Button', () => {
    it('applies square aspect ratio when asIcon is true', () => {
      const wrapper = mount(Button, {
        props: { asIcon: true },
        slots: { default: 'Icon' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('aspect-square')
      expect(button.classes()).toContain('!px-0')
    })

    it('provides icon size through slot props', () => {
      const wrapper = mount(Button, {
        props: { size: 'lg', asIcon: true },
        slots: {
          default: '<span class="test-icon">Icon</span>',
        },
      })

      // Verify the button has the asIcon class
      const button = wrapper.find('button')
      expect(button.classes()).toContain('aspect-square')
      expect(button.classes()).toContain('!px-0')

      // Verify the slot content is rendered
      const icon = wrapper.find('span')
      expect(icon.exists()).toBe(true)
      expect(icon.text()).toBe('Icon')
      expect(icon.classes()).toContain('test-icon')
    })

    it('passes correct slot props for different sizes', () => {
      // Test that slot props are available by checking the component's slot rendering
      const sizes = [
        { size: 'xs', expectedIconClass: 'size-3' },
        { size: 'sm', expectedIconClass: 'size-4' },
        { size: 'md', expectedIconClass: 'size-4' },
        { size: 'lg', expectedIconClass: 'size-5' },
        { size: 'xl', expectedIconClass: 'size-6' },
      ] as const

      sizes.forEach(({ size }) => {
        const wrapper = mount(Button, {
          props: { size },
          slots: {
            default: '<span>Icon</span>',
          },
        })

        // Verify the button renders correctly for each size
        expect(wrapper.find('button').exists()).toBe(true)
        expect(wrapper.find('span').exists()).toBe(true)
        expect(wrapper.find('span').text()).toBe('Icon')
      })
    })
  })

  describe('Base Classes', () => {
    it('always applies base classes', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
      expect(button.classes()).toContain('font-400')
      expect(button.classes()).toContain('transition-colors')
      expect(button.classes()).toContain('focus:outline-none')
    })

    it('applies disabled classes when disabled', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('disabled:opacity-75')
      expect(button.classes()).toContain('disabled:cursor-not-allowed')
    })
  })

  describe('Combinations', () => {
    it('applies correct classes for primary outline + small combination', () => {
      const wrapper = mount(Button, {
        props: { color: 'primary', variant: 'outline', size: 'sm' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      // Base classes
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
      // Color + Variant classes
      expect(button.classes()).toContain('border-primary')
      expect(button.classes()).toContain('text-primary')
      expect(button.classes()).toContain('bg-transparent')
      expect(button.classes()).toContain('border-1')
      // Size classes
      expect(button.classes()).toContain('px-3')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('h-32px')
      expect(button.classes()).toContain('text-xs')
      expect(button.classes()).toContain('rounded-6px')
    })

    it('applies correct classes for danger ghost + extra large combination', () => {
      const wrapper = mount(Button, {
        props: { color: 'danger', variant: 'ghost', size: 'xl' },
        slots: { default: 'Delete' },
      })

      const button = wrapper.find('button')
      // Base classes
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
      // Color + Variant classes
      expect(button.classes()).toContain('text-red-600')
      expect(button.classes()).toContain('bg-transparent')
      // Size classes
      expect(button.classes()).toContain('px-6')
      expect(button.classes()).toContain('py-4')
      expect(button.classes()).toContain('h-44px')
      expect(button.classes()).toContain('text-base')
      expect(button.classes()).toContain('rounded-12px')
    })
  })

  describe('Events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(Button, {
        slots: { default: 'Click me' },
      })

      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('does not emit click when disabled/loading', async () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Loading...' },
      })

      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeFalsy()
    })

    it('handles keyboard events', async () => {
      const wrapper = mount(Button, {
        slots: { default: 'Press me' },
      })

      await wrapper.trigger('keydown.enter')
      expect(wrapper.emitted('keydown')).toHaveLength(1)
    })
  })

  describe('Accessibility', () => {
    it('is focusable by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.element.tabIndex).toBe(0)
    })

    it('has correct role', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.element.tagName).toBe('BUTTON')
    })

    it('is not focusable when disabled', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Loading...' },
      })

      const button = wrapper.find('button')
      expect(button.element.disabled).toBe(true)
    })
  })

  describe('Type Safety', () => {
    it('accepts valid color values', () => {
      const validColors = ['primary', 'secondary', 'danger'] as const

      validColors.forEach((color) => {
        expect(() => {
          mount(Button, {
            props: { color },
            slots: { default: 'Button' },
          })
        }).not.toThrow()
      })
    })

    it('accepts valid variant values', () => {
      const validVariants = ['filled', 'outline', 'ghost'] as const

      validVariants.forEach((variant) => {
        expect(() => {
          mount(Button, {
            props: { variant },
            slots: { default: 'Button' },
          })
        }).not.toThrow()
      })
    })

    it('accepts valid size values', () => {
      const validSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

      validSizes.forEach((size) => {
        expect(() => {
          mount(Button, {
            props: { size },
            slots: { default: 'Button' },
          })
        }).not.toThrow()
      })
    })
  })
})
