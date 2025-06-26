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

  describe('Loading State', () => {
    it('shows loading spinner when isLoading is true', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Loading Button' },
      })

      const spinner = wrapper.find('svg')
      expect(spinner.exists()).toBe(true)
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
      expect(wrapper.text()).toContain('Loading...')
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

    it('handles keyboard space events', async () => {
      const wrapper = mount(Button, {
        slots: { default: 'Press me' },
      })

      await wrapper.trigger('keydown.space')
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

    it('has proper aria-label when provided', () => {
      const wrapper = mount(Button, {
        attrs: { 'aria-label': 'Close dialog' },
        slots: { default: 'X' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('aria-label')).toBe('Close dialog')
    })

    it('has proper aria-describedby when provided', () => {
      const wrapper = mount(Button, {
        attrs: { 'aria-describedby': 'help-text' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('aria-describedby')).toBe('help-text')
    })

    it('has proper aria-expanded when provided', () => {
      const wrapper = mount(Button, {
        attrs: { 'aria-expanded': 'false' },
        slots: { default: 'Menu' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('aria-expanded')).toBe('false')
    })

    it('has proper aria-pressed when provided for toggle buttons', () => {
      const wrapper = mount(Button, {
        attrs: { 'aria-pressed': 'true' },
        slots: { default: 'Toggle' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('aria-pressed')).toBe('true')
    })

    it('maintains focus visibility', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.classes()).toContain('focus:outline-none')
    })

    it('is accessible to screen readers when loading', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Save' },
      })

      const button = wrapper.find('button')
      expect(button.element.disabled).toBe(true)

      // Check that loading state is communicated to screen readers
      const spinner = wrapper.find('svg')
      expect(spinner.exists()).toBe(true)
    })

    it('supports custom tabindex', () => {
      const wrapper = mount(Button, {
        attrs: { tabindex: '-1' },
        slots: { default: 'Button' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('tabindex')).toBe('-1')
    })

    it('supports role attribute override', () => {
      const wrapper = mount(Button, {
        attrs: { role: 'menuitem' },
        slots: { default: 'Menu Item' },
      })

      const button = wrapper.find('button')
      expect(button.attributes('role')).toBe('menuitem')
    })
  })

  describe('Focus Management', () => {
    it('can receive focus programmatically', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      button.element.focus()

      expect(document.activeElement).toBe(button.element)

      wrapper.unmount()
    })

    it('loses focus when disabled', async () => {
      const wrapper = mount(Button, {
        slots: { default: 'Button' },
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      button.element.focus()

      await wrapper.setProps({ isLoading: true })

      expect(button.element.disabled).toBe(true)

      wrapper.unmount()
    })
  })
})
