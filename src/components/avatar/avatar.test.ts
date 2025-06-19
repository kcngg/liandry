import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Avatar from './Avatar.vue'

describe('Avatar Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(Avatar)

      expect(wrapper.element.tagName).toBe('SPAN') // AvatarRoot default tag
      expect(wrapper.classes()).toContain('inline-flex')
      expect(wrapper.classes()).toContain('items-center')
      expect(wrapper.classes()).toContain('justify-center')
    })

    it('renders with image when src is provided', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: 'https://example.com/avatar.jpg',
          alt: 'User Avatar',
        },
      })

      const image = wrapper.find('img')
      expect(image.exists()).toBe(true)
      expect(image.attributes('src')).toBe('https://example.com/avatar.jpg')
      expect(image.attributes('alt')).toBe('User Avatar')
    })

    it('renders fallback when no src is provided', () => {
      const wrapper = mount(Avatar, {
        props: {
          alt: 'John Doe',
        },
      })

      expect(wrapper.find('img').exists()).toBe(false)
      expect(wrapper.text()).toBe('JD') // Initials from alt text
    })

    it('renders custom fallback text', () => {
      const wrapper = mount(Avatar, {
        props: {
          fallback: 'AB',
        },
      })

      expect(wrapper.text()).toBe('AB')
    })

    it('renders fallback slot content', () => {
      const wrapper = mount(Avatar, {
        slots: {
          fallback: '<span>Custom Fallback</span>',
        },
      })

      expect(wrapper.html()).toContain('<span>Custom Fallback</span>')
    })
  })

  describe('Sizes', () => {
    const sizes = [
      { size: 'xs', expectedClasses: ['h-6', 'w-6', 'text-xs'] },
      { size: 'sm', expectedClasses: ['h-8', 'w-8', 'text-sm'] },
      { size: 'md', expectedClasses: ['h-10', 'w-10', 'text-base'] },
      { size: 'lg', expectedClasses: ['h-12', 'w-12', 'text-lg'] },
      { size: 'xl', expectedClasses: ['h-16', 'w-16', 'text-xl'] },
      { size: '2xl', expectedClasses: ['h-20', 'w-20', 'text-2xl'] },
    ] as const

    sizes.forEach(({ size, expectedClasses }) => {
      it(`applies ${size} size classes correctly`, () => {
        const wrapper = mount(Avatar, {
          props: { size },
        })

        expectedClasses.forEach((className) => {
          expect(wrapper.classes()).toContain(className)
        })
      })
    })

    it('uses medium size by default', () => {
      const wrapper = mount(Avatar)

      expect(wrapper.classes()).toContain('h-10')
      expect(wrapper.classes()).toContain('w-10')
      expect(wrapper.classes()).toContain('text-base')
    })
  })

  describe('Shapes', () => {
    it('applies circle shape by default', () => {
      const wrapper = mount(Avatar)

      expect(wrapper.classes()).toContain('rounded-full')
    })

    it('applies circle shape when specified', () => {
      const wrapper = mount(Avatar, {
        props: { shape: 'circle' },
      })

      expect(wrapper.classes()).toContain('rounded-full')
    })

    it('applies square shape when specified', () => {
      const wrapper = mount(Avatar, {
        props: { shape: 'square' },
      })

      expect(wrapper.classes()).toContain('rounded-lg')
    })
  })

  describe('Fallback Behavior', () => {
    it('generates initials from alt text', () => {
      const testCases = [
        { alt: 'John Doe', expected: 'JD' },
        { alt: 'Jane Smith Johnson', expected: 'JS' },
        { alt: 'Alice', expected: 'A' },
        { alt: 'Bob Charlie Delta Echo', expected: 'BC' },
      ]

      testCases.forEach(({ alt, expected }) => {
        const wrapper = mount(Avatar, {
          props: { alt },
        })

        expect(wrapper.text()).toBe(expected)
      })
    })

    it('shows question mark when no alt or fallback provided', () => {
      const wrapper = mount(Avatar)

      expect(wrapper.text()).toBe('?')
    })

    it('prioritizes fallback prop over alt text', () => {
      const wrapper = mount(Avatar, {
        props: {
          alt: 'John Doe',
          fallback: 'XY',
        },
      })

      expect(wrapper.text()).toBe('XY')
    })

    it('applies fallback delay', () => {
      const wrapper = mount(Avatar, {
        props: {
          fallbackDelay: 500,
        },
      })

      const fallback = wrapper.findComponent({ name: 'AvatarFallback' })
      expect(fallback.props('delayMs')).toBe(500)
    })
  })

  describe('Custom Classes', () => {
    it('applies custom CSS class', () => {
      const wrapper = mount(Avatar, {
        props: {
          class: 'custom-avatar-class',
        },
      })

      expect(wrapper.classes()).toContain('custom-avatar-class')
    })

    it('combines custom class with default classes', () => {
      const wrapper = mount(Avatar, {
        props: {
          class: 'border-2 border-red-500',
        },
      })

      expect(wrapper.classes()).toContain('border-2')
      expect(wrapper.classes()).toContain('border-red-500')
      expect(wrapper.classes()).toContain('inline-flex') // Default class
    })
  })

  describe('Events', () => {
    it('emits loadingStatusChange event', async () => {
      const wrapper = mount(Avatar, {
        props: {
          src: 'https://example.com/avatar.jpg',
        },
      })

      const image = wrapper.findComponent({ name: 'AvatarImage' })
      await image.vm.$emit('loadingStatusChange', 'loaded')

      expect(wrapper.emitted('loadingStatusChange')).toBeTruthy()
      expect(wrapper.emitted('loadingStatusChange')?.[0]).toEqual(['loaded'])
    })

    it('handles different loading statuses', async () => {
      const wrapper = mount(Avatar, {
        props: {
          src: 'https://example.com/avatar.jpg',
        },
      })

      const image = wrapper.findComponent({ name: 'AvatarImage' })

      // Test different statuses
      const statuses = ['idle', 'loading', 'loaded', 'error'] as const

      for (const status_ of statuses) {
        await image.vm.$emit('loadingStatusChange', status_)
      }

      const emittedEvents = wrapper.emitted('loadingStatusChange')
      expect(emittedEvents).toHaveLength(4)
      expect(emittedEvents?.[0]).toEqual(['idle'])
      expect(emittedEvents?.[1]).toEqual(['loading'])
      expect(emittedEvents?.[2]).toEqual(['loaded'])
      expect(emittedEvents?.[3]).toEqual(['error'])
    })
  })

  describe('Accessibility', () => {
    it('provides alt text for images', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: 'https://example.com/avatar.jpg',
          alt: 'User profile picture',
        },
      })

      const image = wrapper.find('img')
      expect(image.attributes('alt')).toBe('User profile picture')
    })

    it('maintains accessibility without image', () => {
      const wrapper = mount(Avatar, {
        props: {
          alt: 'John Doe',
        },
      })

      // Should still be accessible with fallback text
      expect(wrapper.text()).toBe('JD')
      expect(wrapper.element.tagName).toBe('SPAN')
    })
  })

  describe('Integration', () => {
    it('works with all size and shape combinations', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
      const shapes = ['circle', 'square'] as const

      sizes.forEach((size) => {
        shapes.forEach((shape) => {
          const wrapper = mount(Avatar, {
            props: { size, shape },
          })

          // Should have appropriate size classes
          expect(wrapper.classes().some((cls) => cls.startsWith('h-'))).toBe(
            true,
          )
          expect(wrapper.classes().some((cls) => cls.startsWith('w-'))).toBe(
            true,
          )

          // Should have appropriate shape classes
          if (shape === 'circle') {
            expect(wrapper.classes()).toContain('rounded-full')
          } else {
            expect(wrapper.classes()).toContain('rounded-lg')
          }
        })
      })
    })

    it('works with image and fallback combination', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: 'https://example.com/avatar.jpg',
          alt: 'John Doe',
          fallback: 'JD',
          size: 'lg',
          shape: 'square',
        },
      })

      // Should have image
      expect(wrapper.find('img').exists()).toBe(true)
      expect(wrapper.find('img').attributes('src')).toBe(
        'https://example.com/avatar.jpg',
      )

      // Should have size and shape classes
      expect(wrapper.classes()).toContain('h-12')
      expect(wrapper.classes()).toContain('w-12')
      expect(wrapper.classes()).toContain('rounded-lg')

      // Fallback should be present (even if not visible when image loads)
      const fallback = wrapper.findComponent({ name: 'AvatarFallback' })
      expect(fallback.exists()).toBe(true)
    })

    it('handles edge cases gracefully', () => {
      // Empty alt text
      const wrapper1 = mount(Avatar, {
        props: { alt: '' },
      })
      expect(wrapper1.text()).toBe('?')

      // Whitespace-only alt text
      const wrapper2 = mount(Avatar, {
        props: { alt: '   ' },
      })
      expect(wrapper2.text()).toBe('?')

      // Single character alt text
      const wrapper3 = mount(Avatar, {
        props: { alt: 'A' },
      })
      expect(wrapper3.text()).toBe('A')

      // Special characters in alt text
      const wrapper4 = mount(Avatar, {
        props: { alt: "John-Doe O'Connor" },
      })
      expect(wrapper4.text()).toBe('JO')
    })
  })

  describe('Styling', () => {
    it('applies base styling classes', () => {
      const wrapper = mount(Avatar)

      const expectedBaseClasses = [
        'inline-flex',
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-gray-100',
        'text-gray-600',
        'font-medium',
        'select-none',
        'shrink-0',
      ]

      expectedBaseClasses.forEach((className) => {
        expect(wrapper.classes()).toContain(className)
      })
    })

    it('applies fallback styling to fallback element', () => {
      const wrapper = mount(Avatar, {
        props: { fallback: 'AB' },
      })

      const fallback = wrapper.findComponent({ name: 'AvatarFallback' })
      const fallbackClasses = fallback.classes()

      const expectedFallbackClasses = [
        'flex',
        'h-full',
        'w-full',
        'items-center',
        'justify-center',
        'bg-gray-100',
        'text-gray-600',
        'font-medium',
        'uppercase',
      ]

      expectedFallbackClasses.forEach((className) => {
        expect(fallbackClasses).toContain(className)
      })
    })
  })
})
