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

    it('supports aria-label for group description', () => {
      const wrapper = mount(ButtonGroup, {
        attrs: { 'aria-label': 'Text formatting options' },
        slots: { default: '<button>Bold</button><button>Italic</button>' },
      })

      expect(wrapper.attributes('aria-label')).toBe('Text formatting options')
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('supports aria-labelledby for group description', () => {
      const wrapper = mount(ButtonGroup, {
        attrs: { 'aria-labelledby': 'group-title' },
        slots: {
          default: '<button>Option 1</button><button>Option 2</button>',
        },
      })

      expect(wrapper.attributes('aria-labelledby')).toBe('group-title')
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('maintains keyboard navigation within group', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(3)

      // All buttons should be focusable
      buttons.forEach((button) => {
        expect(button.find('button').element.tabIndex).toBe(0)
      })
    })

    it('works with disabled buttons in group', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button>Enabled</Button>
            <Button is-loading>Disabled</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // First button should be enabled
      expect(buttons[0].find('button').element.disabled).toBe(false)

      // Second button should be disabled due to loading
      expect(buttons[1].find('button').element.disabled).toBe(true)
    })

    it('maintains proper focus management', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button>First</Button>
            <Button>Second</Button>
          `,
        },
        global: {
          components: { Button },
        },
        attachTo: document.body,
      })

      const buttons = wrapper.findAllComponents(Button)

      // Focus first button
      buttons[0].find('button').element.focus()
      expect(document.activeElement).toBe(buttons[0].find('button').element)

      // Focus second button
      buttons[1].find('button').element.focus()
      expect(document.activeElement).toBe(buttons[1].find('button').element)

      wrapper.unmount()
    })

    it('supports role override when needed', () => {
      const wrapper = mount(ButtonGroup, {
        attrs: { role: 'toolbar' },
        slots: { default: '<button>Tool 1</button><button>Tool 2</button>' },
      })

      expect(wrapper.attributes('role')).toBe('toolbar')
    })

    it('handles keyboard events within group', async () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `<Button>Test Button</Button>`,
        },
        global: {
          components: { Button },
        },
      })

      const button = wrapper.findComponent(Button)

      await button.trigger('keydown.enter')
      expect(button.emitted('keydown')).toHaveLength(1)
    })
  })

  describe('Integration with Button Component', () => {
    it('maintains button accessibility in group', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button aria-label="Save document">Save</Button>
            <Button aria-label="Cancel editing">Cancel</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // Check aria-labels are preserved
      expect(buttons[0].find('button').attributes('aria-label')).toBe(
        'Save document',
      )
      expect(buttons[1].find('button').attributes('aria-label')).toBe(
        'Cancel editing',
      )
    })

    it('works with loading buttons maintaining accessibility', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button>Normal</Button>
            <Button is-loading aria-label="Saving document">Saving</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(2)

      // Check that loading button is properly disabled
      const loadingButton = buttons[1]
      expect(loadingButton.find('button').element.disabled).toBe(true)
      expect(loadingButton.find('svg').exists()).toBe(true) // Loading spinner
      expect(loadingButton.find('button').attributes('aria-label')).toBe(
        'Saving document',
      )
    })

    it('handles mixed button states accessibility', () => {
      const wrapper = mount(ButtonGroup, {
        slots: {
          default: `
            <Button aria-pressed="false">Toggle A</Button>
            <Button aria-pressed="true">Toggle B</Button>
            <Button is-loading>Loading</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(3)

      // Check toggle states
      expect(buttons[0].find('button').attributes('aria-pressed')).toBe('false')
      expect(buttons[1].find('button').attributes('aria-pressed')).toBe('true')

      // Check loading state
      expect(buttons[2].find('button').element.disabled).toBe(true)
    })
  })

  describe('Screen Reader Support', () => {
    it('provides proper context for screen readers', () => {
      const wrapper = mount(ButtonGroup, {
        attrs: {
          'aria-label': 'Document actions',
          role: 'group',
        },
        slots: {
          default: `
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button>Share</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      expect(wrapper.attributes('aria-label')).toBe('Document actions')
      expect(wrapper.attributes('role')).toBe('group')

      const buttons = wrapper.findAllComponents(Button)
      expect(buttons).toHaveLength(3)
    })

    it('works with describedby for additional context', () => {
      const wrapper = mount(ButtonGroup, {
        attrs: {
          'aria-describedby': 'help-text',
          'aria-label': 'Formatting toolbar',
        },
        slots: {
          default: `
            <Button>Bold</Button>
            <Button>Italic</Button>
          `,
        },
        global: {
          components: { Button },
        },
      })

      expect(wrapper.attributes('aria-describedby')).toBe('help-text')
      expect(wrapper.attributes('aria-label')).toBe('Formatting toolbar')
    })
  })
})
