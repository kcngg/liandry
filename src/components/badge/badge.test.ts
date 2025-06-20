import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge', () => {
    it('renders correctly with default props', () => {
        const wrapper = mount(Badge, {
            slots: {
                default: 'Test Badge',
            },
        })

        expect(wrapper.text()).toBe('Test Badge')
        expect(wrapper.classes()).toContain('bg-primary')
        expect(wrapper.classes()).toContain('text-white')
    })

    it('applies correct color classes', () => {
        const primaryWrapper = mount(Badge, {
            props: { color: 'primary' },
            slots: { default: 'Primary' },
        })
        expect(primaryWrapper.classes()).toContain('bg-primary')

        const secondaryWrapper = mount(Badge, {
            props: { color: 'secondary' },
            slots: { default: 'Secondary' },
        })
        expect(secondaryWrapper.classes()).toContain('bg-white/10')

        const dangerWrapper = mount(Badge, {
            props: { color: 'danger' },
            slots: { default: 'Danger' },
        })
        expect(dangerWrapper.classes()).toContain('bg-red-600')
    })

    it('applies correct variant classes', () => {
        const filledWrapper = mount(Badge, {
            props: { variant: 'filled', color: 'primary' },
            slots: { default: 'Filled' },
        })
        expect(filledWrapper.classes()).toContain('bg-primary')

        const outlineWrapper = mount(Badge, {
            props: { variant: 'outline', color: 'primary' },
            slots: { default: 'Outline' },
        })
        expect(outlineWrapper.classes()).toContain('border-primary')
        expect(outlineWrapper.classes()).toContain('text-primary')

        const ghostWrapper = mount(Badge, {
            props: { variant: 'ghost', color: 'primary' },
            slots: { default: 'Ghost' },
        })
        expect(ghostWrapper.classes()).toContain('text-primary')
        expect(ghostWrapper.classes()).toContain('bg-primary/10')
    })

    it('applies correct size classes', () => {
        const xsWrapper = mount(Badge, {
            props: { size: 'xs' },
            slots: { default: 'XS' },
        })
        expect(xsWrapper.classes()).toContain('text-xs')

        const smWrapper = mount(Badge, {
            props: { size: 'sm' },
            slots: { default: 'SM' },
        })
        expect(smWrapper.classes()).toContain('text-xs')

        const mdWrapper = mount(Badge, {
            props: { size: 'md' },
            slots: { default: 'MD' },
        })
        expect(mdWrapper.classes()).toContain('text-sm')

        const lgWrapper = mount(Badge, {
            props: { size: 'lg' },
            slots: { default: 'LG' },
        })
        expect(lgWrapper.classes()).toContain('text-sm')
    })

    it('applies rounded class when rounded prop is true', () => {
        const wrapper = mount(Badge, {
            props: { rounded: true },
            slots: { default: 'Rounded' },
        })
        expect(wrapper.classes()).toContain('rounded-full')
    })

    it('does not apply rounded class when rounded prop is false', () => {
        const wrapper = mount(Badge, {
            props: { rounded: false },
            slots: { default: 'Not Rounded' },
        })
        expect(wrapper.classes()).not.toContain('rounded-full')
    })

    it('renders with custom content', () => {
        const wrapper = mount(Badge, {
            slots: {
                default: '<span>Custom Content</span>',
            },
        })
        expect(wrapper.html()).toContain('<span>Custom Content</span>')
    })

    it('combines multiple props correctly', () => {
        const wrapper = mount(Badge, {
            props: {
                color: 'danger',
                variant: 'outline',
                size: 'lg',
                rounded: true,
            },
            slots: { default: 'Complex Badge' },
        })

        expect(wrapper.classes()).toContain('border-red-600')
        expect(wrapper.classes()).toContain('text-red-600')
        expect(wrapper.classes()).toContain('text-sm')
        expect(wrapper.classes()).toContain('rounded-full')
    })
}) 