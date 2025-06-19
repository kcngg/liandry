import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

describe('ButtonGroup Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: '<button>Test</button>',
        },
      })

      expect(wrapper.element.tagName).toBe('DIV')
      expect(wrapper.attributes('role')).toBe('group')
      expect(wrapper.html()).toContain('<button>Test</button>')
    })

    it('renders with multiple child buttons', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
          `,
        },
      })

      expect(wrapper.html()).toContain('First')
      expect(wrapper.html()).toContain('Second')
      expect(wrapper.html()).toContain('Third')
    })

    it('applies base classes', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.classes()).toContain('inline-flex')
    })
  })

  describe('Size Injection', () => {
    it('provides size to child Button components', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'lg' },
        slots: {
          default: `
            <Button>First</Button>
            <Button>Second</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // Check that buttons have the large size classes
      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('h-40px')
        expect(button.find('button').classes()).toContain('px-5')
        expect(button.find('button').classes()).toContain('py-3')
        expect(button.find('button').classes()).toContain('text-base')
        expect(button.find('button').classes()).toContain('rounded-10px')
      })
    })

    it('uses default size when not specified', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `<Button>Test</Button>`,
        },
        global: {
          components: { Button },
        },
      })

      const button = wrapper.findComponent(Button)
      // Should have medium size (default)
      expect(button.find('button').classes()).toContain('h-36px')
      expect(button.find('button').classes()).toContain('px-4')
      expect(button.find('button').classes()).toContain('text-sm')
      expect(button.find('button').classes()).toContain('rounded-8px')
    })

    it('group size takes precedence over individual button size', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'sm' },
        slots: {
          default: `
            <Button>Normal</Button>
            <Button size="xl">Override Attempt</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // Both buttons should have small size from group (group takes precedence)
      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('h-32px')
        expect(button.find('button').classes()).toContain('px-3')
        expect(button.find('button').classes()).toContain('text-xs')
        expect(button.find('button').classes()).toContain('rounded-6px')
      })
    })
  })

  describe('Orientation', () => {
    it('applies horizontal orientation by default', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.classes()).toContain('flex-row')
    })

    it('applies horizontal orientation when specified', () => {
      const wrapper = mount(ButtonGroup, {
        props: { orientation: 'horizontal' },
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.classes()).toContain('flex-row')
    })

    it('applies vertical orientation when specified', () => {
      const wrapper = mount(ButtonGroup, {
        props: { orientation: 'vertical' },
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.classes()).toContain('flex-col')
    })
  })

  describe('Attachment', () => {
    it('applies attached styling by default', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      // Should not have gap class when attached
      expect(wrapper.classes()).not.toContain('gap-2')
    })

    it('applies gap when not attached', () => {
      const wrapper = mount(ButtonGroup, {
        props: { attached: false },
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.classes()).toContain('gap-2')
    })

    it('uses default attached value', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      // Default should be attached (true)
      expect(wrapper.classes()).not.toContain('gap-2')
    })
  })

  describe('Border Radius Handling', () => {
    it('applies horizontal border radius classes when attached horizontally', () => {
      const wrapper = mount(ButtonGroup, {
        props: { orientation: 'horizontal', attached: true },
        slots: { default: '<button>Test</button>' },
      })

      // Check for horizontal border radius classes
      const classes = wrapper.classes()
      expect(classes.some((cls) => cls.includes('rounded-r-none'))).toBe(true)
      expect(classes.some((cls) => cls.includes('rounded-l-none'))).toBe(true)
      expect(classes.some((cls) => cls.includes('-ml-px'))).toBe(true)
    })

    it('applies vertical border radius classes when attached vertically', () => {
      const wrapper = mount(ButtonGroup, {
        props: { orientation: 'vertical', attached: true },
        slots: { default: '<button>Test</button>' },
      })

      // Check for vertical border radius classes
      const classes = wrapper.classes()
      expect(classes.some((cls) => cls.includes('rounded-b-none'))).toBe(true)
      expect(classes.some((cls) => cls.includes('rounded-t-none'))).toBe(true)
      expect(classes.some((cls) => cls.includes('-mt-px'))).toBe(true)
    })

    it('does not apply border radius classes when not attached', () => {
      const wrapper = mount(ButtonGroup, {
        props: { attached: false },
        slots: { default: '<button>Test</button>' },
      })

      const classes = wrapper.classes()
      expect(classes.some((cls) => cls.includes('rounded-'))).toBe(false)
      expect(classes.some((cls) => cls.includes('-ml-px'))).toBe(false)
      expect(classes.some((cls) => cls.includes('-mt-px'))).toBe(false)
    })
  })

  describe('Accessibility', () => {
    it('has correct role attribute', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      expect(wrapper.attributes('role')).toBe('group')
    })

    it('maintains accessibility when using Button components', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `<Button>Accessible Button</Button>`,
        },
        global: {
          components: { Button },
        },
      })

      const button = wrapper.findComponent(Button)
      expect(button.find('button').element.tagName).toBe('BUTTON')
      expect(wrapper.attributes('role')).toBe('group')
    })
  })

  describe('Integration with Button Component', () => {
    it('works with different button variants', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'sm' },
        slots: {
          default: `
            <Button variant="filled" color="primary">Filled</Button>
            <Button variant="outline" color="secondary">Outline</Button>
            <Button variant="ghost" color="danger">Ghost</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(3)

      // All should have small size from group
      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('h-32px')
        expect(button.find('button').classes()).toContain('text-xs')
        expect(button.find('button').classes()).toContain('rounded-6px')
      })

      // Check different variants are applied
      expect(buttons[0].find('button').classes()).toContain('bg-primary')
      expect(buttons[1].find('button').classes()).toContain('border-1')
      expect(buttons[2].find('button').classes()).toContain('bg-transparent')
    })

    it('works with icon buttons', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'md' },
        slots: {
          default: `
            <Button as-icon>Icon1</Button>
            <Button as-icon>Icon2</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('aspect-square')
        expect(button.find('button').classes()).toContain('!px-0')
        expect(button.find('button').classes()).toContain('h-36px') // md size
      })
    })

    it('works with loading buttons', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'lg' },
        slots: {
          default: `
            <Button>Normal</Button>
            <Button is-loading>Loading</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // Check that loading button has spinner
      const loadingButton = buttons[1]
      expect(loadingButton.find('svg').exists()).toBe(true)
      expect(loadingButton.find('svg').classes()).toContain('animate-spin')

      // Both should have large size
      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('h-40px')
      })
    })

    it('works with mixed button configurations', () => {
      const wrapper = mount(ButtonGroup, {
        props: { size: 'xl', orientation: 'vertical' },
        slots: {
          default: `
            <Button color="primary">Save</Button>
            <Button color="secondary" as-icon>Edit</Button>
            <Button color="danger" is-loading>Delete</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(3)

      // All should have xl size and be in vertical layout
      expect(wrapper.classes()).toContain('flex-col')
      buttons.forEach((button) => {
        expect(button.find('button').classes()).toContain('h-44px')
        expect(button.find('button').classes()).toContain('text-base')
        expect(button.find('button').classes()).toContain('rounded-12px')
      })

      // Check individual button characteristics
      expect(buttons[1].find('button').classes()).toContain('aspect-square') // as-icon
      expect(buttons[2].find('svg').exists()).toBe(true) // loading spinner
    })
  })

  describe('All Sizes', () => {
    const sizes = [
      {
        size: 'xs',
        expectedHeight: 'h-26px',
        expectedText: 'text-xs',
        expectedRadius: 'rounded-6px',
      },
      {
        size: 'sm',
        expectedHeight: 'h-32px',
        expectedText: 'text-xs',
        expectedRadius: 'rounded-6px',
      },
      {
        size: 'md',
        expectedHeight: 'h-36px',
        expectedText: 'text-sm',
        expectedRadius: 'rounded-8px',
      },
      {
        size: 'lg',
        expectedHeight: 'h-40px',
        expectedText: 'text-base',
        expectedRadius: 'rounded-10px',
      },
      {
        size: 'xl',
        expectedHeight: 'h-44px',
        expectedText: 'text-base',
        expectedRadius: 'rounded-12px',
      },
    ] as const

    sizes.forEach(({ size, expectedHeight, expectedText, expectedRadius }) => {
      it(`applies ${size} size to all child buttons`, () => {
        const wrapper = mount(ButtonGroup, {
          props: { size },
          slots: {
            default: `
              <Button>First</Button>
              <Button>Second</Button>
            `,
          },
          global: {
            components: { Button },
          },
        })

        const buttons = wrapper.findAllComponents(Button)
        buttons.forEach((button) => {
          expect(button.find('button').classes()).toContain(expectedHeight)
          expect(button.find('button').classes()).toContain(expectedText)
          expect(button.find('button').classes()).toContain(expectedRadius)
        })
      })
    })
  })

  describe('Constants Usage', () => {
    it('uses default values from constants', () => {
      const wrapper = mount(ButtonGroup, {
        slots: { default: '<button>Test</button>' },
      })

      // Should use defaults from BUTTON_GROUP_DEFAULTS
      expect(wrapper.classes()).toContain('flex-row') // horizontal
      expect(wrapper.classes()).not.toContain('gap-2') // attached: true
    })

    it('works with Button component using constants', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `<Button>Test</Button>`,
        },
        global: {
          components: { Button },
        },
      })

      const button = wrapper.findComponent(Button)
      // Should use defaults from BUTTON_DEFAULTS and BUTTON_GROUP_DEFAULTS
      expect(button.find('button').classes()).toContain('bg-primary') // primary color
      expect(button.find('button').classes()).toContain('h-36px') // md size
    })
  })
})
