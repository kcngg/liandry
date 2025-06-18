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

  describe('Variants', () => {
    it('applies primary variant classes by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-blue-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-blue-600')
    })

    it('applies primary variant classes when explicitly set', () => {
      const wrapper = mount(Button, {
        props: { variant: 'primary' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-blue-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-blue-600')
    })

    it('applies secondary variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'secondary' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-gray-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-gray-600')
    })

    it('applies danger variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'danger' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-red-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-red-600')
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
      expect(button.classes()).toContain('text-base')
    })

    it('applies medium size classes when explicitly set', () => {
      const wrapper = mount(Button, {
        props: { size: 'md' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-4')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('h-36px')
      expect(button.classes()).toContain('text-base')
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
      expect(button.classes()).toContain('text-sm')
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
      expect(button.classes()).toContain('text-lg')
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
      expect(button.classes()).toContain('text-xl')
    })
  })

  describe('Base Classes', () => {
    it('always applies base classes', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('rounded-8px')
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
    })

    it('applies base classes with different variants and sizes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'danger', size: 'xl' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('rounded-8px')
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
    })
  })

  describe('Combinations', () => {
    it('applies correct classes for primary + small combination', () => {
      const wrapper = mount(Button, {
        props: { variant: 'primary', size: 'sm' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      // Base classes
      expect(button.classes()).toContain('rounded-8px')
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
      // Variant classes
      expect(button.classes()).toContain('bg-blue-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-blue-600')
      // Size classes
      expect(button.classes()).toContain('px-3')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('h-32px')
      expect(button.classes()).toContain('text-sm')
    })

    it('applies correct classes for danger + extra large combination', () => {
      const wrapper = mount(Button, {
        props: { variant: 'danger', size: 'xl' },
        slots: { default: 'Delete' },
      })

      const button = wrapper.find('button')
      // Base classes
      expect(button.classes()).toContain('rounded-8px')
      expect(button.classes()).toContain('flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('justify-center')
      // Variant classes
      expect(button.classes()).toContain('bg-red-500')
      expect(button.classes()).toContain('text-white')
      expect(button.classes()).toContain('hover:bg-red-600')
      // Size classes
      expect(button.classes()).toContain('px-6')
      expect(button.classes()).toContain('py-4')
      expect(button.classes()).toContain('h-44px')
      expect(button.classes()).toContain('text-xl')
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

    it('can be clicked multiple times', async () => {
      const wrapper = mount(Button, {
        slots: { default: 'Click me' },
      })

      await wrapper.trigger('click')
      await wrapper.trigger('click')
      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toHaveLength(3)
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
      expect(button.element.getAttribute('role')).toBe(null) // Native button doesn't need explicit role
      expect(button.element.tagName).toBe('BUTTON')
    })
  })

  describe('Type Safety', () => {
    it('accepts valid variant values', () => {
      const validVariants = ['primary', 'secondary', 'danger'] as const

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
