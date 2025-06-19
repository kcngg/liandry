import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Stack from './Stack.vue'
import Grid from './Grid.vue'
import Section from './Section.vue'
import Container from './Container.vue'

describe('Stack Component', () => {
    describe('Rendering', () => {
        it('renders with default props', () => {
            const wrapper = mount(Stack, {
                slots: {
                    default: '<div>Item 1</div><div>Item 2</div>',
                },
            })

            expect(wrapper.element.tagName).toBe('DIV')
            expect(wrapper.html()).toContain('Item 1')
            expect(wrapper.html()).toContain('Item 2')
        })

        it('applies stack class', () => {
            const wrapper = mount(Stack)
            expect(wrapper.classes()).toContain('stack')
        })
    })

    describe('Direction', () => {
        it('applies column direction by default', () => {
            const wrapper = mount(Stack)
            expect(wrapper.attributes('style')).toContain('flex-direction: column')
        })

        it('applies row direction when specified', () => {
            const wrapper = mount(Stack, {
                props: { direction: 'row' },
            })
            expect(wrapper.attributes('style')).toContain('flex-direction: row')
        })

        it('applies column-reverse direction', () => {
            const wrapper = mount(Stack, {
                props: { direction: 'column-reverse' },
            })
            expect(wrapper.attributes('style')).toContain('flex-direction: column-reverse')
        })

        it('applies row-reverse direction', () => {
            const wrapper = mount(Stack, {
                props: { direction: 'row-reverse' },
            })
            expect(wrapper.attributes('style')).toContain('flex-direction: row-reverse')
        })
    })

    describe('Gap', () => {
        it('applies default gap', () => {
            const wrapper = mount(Stack)
            expect(wrapper.attributes('style')).toContain('gap: 1rem')
        })

        it('applies custom gap', () => {
            const wrapper = mount(Stack, {
                props: { gap: '2rem' },
            })
            expect(wrapper.attributes('style')).toContain('gap: 2rem')
        })

        it('applies numeric gap', () => {
            const wrapper = mount(Stack, {
                props: { gap: 16 },
            })
            expect(wrapper.attributes('style')).toContain('gap: 16px')
        })
    })

    describe('Alignment', () => {
        it('applies align classes', () => {
            const wrapper = mount(Stack, {
                props: { align: 'center' },
            })
            expect(wrapper.attributes('style')).toContain('align-items: center')
        })

        it('applies justify classes', () => {
            const wrapper = mount(Stack, {
                props: { justify: 'between' },
            })
            expect(wrapper.attributes('style')).toContain('justify-content: space-between')
        })
    })

    describe('Wrap', () => {
        it('applies wrap when enabled', () => {
            const wrapper = mount(Stack, {
                props: { wrap: true },
            })
            expect(wrapper.attributes('style')).toContain('flex-wrap: wrap')
        })

        it('does not apply wrap by default', () => {
            const wrapper = mount(Stack)
            expect(wrapper.attributes('style')).toContain('flex-wrap: nowrap')
        })
    })

    describe('Custom Element', () => {
        it('renders as custom element when specified', () => {
            const wrapper = mount(Stack, {
                props: { as: 'section' },
            })
            expect(wrapper.element.tagName).toBe('SECTION')
        })
    })
})

describe('Grid Component', () => {
    describe('Rendering', () => {
        it('renders with default props', () => {
            const wrapper = mount(Grid, {
                slots: {
                    default: '<div>Item 1</div><div>Item 2</div>',
                },
            })

            expect(wrapper.element.tagName).toBe('DIV')
            expect(wrapper.classes()).toContain('grid')
            expect(wrapper.attributes('style')).toContain('display: grid')
            expect(wrapper.html()).toContain('Item 1')
            expect(wrapper.html()).toContain('Item 2')
        })
    })

    describe('Columns', () => {
        it('has no default columns', () => {
            const wrapper = mount(Grid)
            expect(wrapper.attributes('style')).not.toContain('grid-template-columns')
        })

        it('applies numeric columns', () => {
            const wrapper = mount(Grid, {
                props: { columns: 3 },
            })
            expect(wrapper.attributes('style')).toContain('grid-template-columns: repeat(3, 1fr)')
        })

        it('applies string columns', () => {
            const wrapper = mount(Grid, {
                props: { columns: 'repeat(auto-fit, minmax(200px, 1fr))' },
            })
            expect(wrapper.attributes('style')).toContain('grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))')
        })
    })

    describe('Rows', () => {
        it('applies numeric rows', () => {
            const wrapper = mount(Grid, {
                props: { rows: 2 },
            })
            expect(wrapper.attributes('style')).toContain('grid-template-rows: repeat(2, 1fr)')
        })

        it('applies string rows', () => {
            const wrapper = mount(Grid, {
                props: { rows: 'repeat(3, minmax(0, 1fr))' },
            })
            expect(wrapper.attributes('style')).toContain('grid-template-rows: repeat(3, minmax(0, 1fr))')
        })
    })

    describe('Gap', () => {
        it('has no default gap', () => {
            const wrapper = mount(Grid)
            expect(wrapper.attributes('style')).not.toContain('gap:')
        })

        it('applies custom gap', () => {
            const wrapper = mount(Grid, {
                props: { gap: '1.5rem' },
            })
            expect(wrapper.attributes('style')).toContain('gap: 1.5rem')
        })

        it('applies separate column and row gaps', () => {
            const wrapper = mount(Grid, {
                props: { columnGap: '2rem', rowGap: '1rem' },
            })
            expect(wrapper.attributes('style')).toContain('column-gap: 2rem')
            expect(wrapper.attributes('style')).toContain('row-gap: 1rem')
        })

        it('applies numeric gap', () => {
            const wrapper = mount(Grid, {
                props: { gap: 16 },
            })
            expect(wrapper.attributes('style')).toContain('gap: 16px')
        })
    })

    describe('Auto Flow', () => {
        it('applies auto flow', () => {
            const wrapper = mount(Grid, {
                props: { autoFlow: 'column' },
            })
            expect(wrapper.attributes('style')).toContain('grid-auto-flow: column')
        })

        it('applies default auto flow', () => {
            const wrapper = mount(Grid)
            expect(wrapper.attributes('style')).toContain('grid-auto-flow: row')
        })
    })

    describe('Custom Element', () => {
        it('renders as custom element when specified', () => {
            const wrapper = mount(Grid, {
                props: { as: 'section' },
            })
            expect(wrapper.element.tagName).toBe('SECTION')
        })
    })
})

describe('Section Component', () => {
    describe('Rendering', () => {
        it('renders with title', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test Section' },
                slots: { default: '<p>Content</p>' },
            })

            expect(wrapper.find('h2').text()).toBe('Test Section')
            expect(wrapper.html()).toContain('<p>Content</p>')
        })

        it('renders with title and subtitle', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test Section', subtitle: 'Test Subtitle' },
                slots: { default: '<p>Content</p>' },
            })

            expect(wrapper.find('h2').text()).toBe('Test Section')
            expect(wrapper.find('.section-subtitle').text()).toBe('Test Subtitle')
            expect(wrapper.html()).toContain('<p>Content</p>')
        })
    })

    describe('Heading Levels', () => {
        it('renders h2 by default', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test' },
            })
            expect(wrapper.find('h2').exists()).toBe(true)
        })

        it('renders h1 when level is 1', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', level: 1 },
            })
            expect(wrapper.find('h1').exists()).toBe(true)
        })

        it('renders h3 when level is 3', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', level: 3 },
            })
            expect(wrapper.find('h3').exists()).toBe(true)
        })

        it('renders h6 when level is 6', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', level: 6 },
            })
            expect(wrapper.find('h6').exists()).toBe(true)
        })
    })

    describe('Spacing', () => {
        it('applies default spacing', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test' },
                slots: { default: '<p>Content</p>' },
            })
            expect(wrapper.find('.section-header').attributes('style')).toContain('margin-bottom: 1rem')
        })

        it('applies custom spacing', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', spacing: '2rem' },
                slots: { default: '<p>Content</p>' },
            })
            expect(wrapper.find('.section-header').attributes('style')).toContain('margin-bottom: 2rem')
        })

        it('applies numeric spacing', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', spacing: 32 },
                slots: { default: '<p>Content</p>' },
            })
            expect(wrapper.find('.section-header').attributes('style')).toContain('margin-bottom: 32px')
        })
    })

    describe('Custom Element', () => {
        it('renders as section by default', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test' },
            })
            expect(wrapper.element.tagName).toBe('SECTION')
        })

        it('renders as custom element when specified', () => {
            const wrapper = mount(Section, {
                props: { title: 'Test', as: 'article' },
            })
            expect(wrapper.element.tagName).toBe('ARTICLE')
        })
    })
})

describe('Container Component', () => {
    describe('Rendering', () => {
        it('renders with default props', () => {
            const wrapper = mount(Container, {
                slots: { default: '<p>Content</p>' },
            })

            expect(wrapper.element.tagName).toBe('DIV')
            expect(wrapper.html()).toContain('<p>Content</p>')
        })
    })

    describe('Sizes', () => {
        it('applies large size by default', () => {
            const wrapper = mount(Container)
            expect(wrapper.attributes('style')).toContain('max-width: 1024px')
        })

        it('applies xs size', () => {
            const wrapper = mount(Container, {
                props: { size: 'xs' },
            })
            expect(wrapper.attributes('style')).toContain('max-width: 480px')
        })

        it('applies sm size', () => {
            const wrapper = mount(Container, {
                props: { size: 'sm' },
            })
            expect(wrapper.attributes('style')).toContain('max-width: 640px')
        })

        it('applies md size', () => {
            const wrapper = mount(Container, {
                props: { size: 'md' },
            })
            expect(wrapper.attributes('style')).toContain('max-width: 768px')
        })

        it('applies xl size', () => {
            const wrapper = mount(Container, {
                props: { size: 'xl' },
            })
            expect(wrapper.attributes('style')).toContain('max-width: 1280px')
        })

        it('applies full size', () => {
            const wrapper = mount(Container, {
                props: { size: 'full' },
            })
            expect(wrapper.attributes('style')).toContain('max-width: 100%')
        })
    })

    describe('Centering', () => {
        it('centers by default', () => {
            const wrapper = mount(Container)
            expect(wrapper.attributes('style')).toContain('margin: 0px auto')
        })

        it('does not center when disabled', () => {
            const wrapper = mount(Container, {
                props: { center: false },
            })
            expect(wrapper.attributes('style')).toContain('margin: 0')
            expect(wrapper.attributes('style')).not.toContain('margin: 0 auto')
        })
    })

    describe('Padding', () => {
        it('applies default padding', () => {
            const wrapper = mount(Container)
            expect(wrapper.attributes('style')).toContain('padding: 1rem')
        })

        it('applies custom padding', () => {
            const wrapper = mount(Container, {
                props: { padding: '2rem' },
            })
            expect(wrapper.attributes('style')).toContain('padding: 2rem')
        })

        it('applies numeric padding', () => {
            const wrapper = mount(Container, {
                props: { padding: 32 },
            })
            expect(wrapper.attributes('style')).toContain('padding: 32px')
        })
    })

    describe('Custom Element', () => {
        it('renders as div by default', () => {
            const wrapper = mount(Container)
            expect(wrapper.element.tagName).toBe('DIV')
        })

        it('renders as custom element when specified', () => {
            const wrapper = mount(Container, {
                props: { as: 'main' },
            })
            expect(wrapper.element.tagName).toBe('MAIN')
        })
    })
})

describe('Layout Components Integration', () => {
    it('works together in simple layouts', () => {
        const wrapper = mount(Container, {
            props: { size: 'xl' },
            slots: {
                default: '<div>Test Content</div>',
            },
        })

        expect(wrapper.attributes('style')).toContain('max-width: 1280px')
        expect(wrapper.html()).toContain('Test Content')
    })

    it('maintains proper semantic structure', () => {
        const wrapper = mount(Container, {
            props: { as: 'main' },
            slots: {
                default: '<div>Main Content</div>',
            },
        })

        expect(wrapper.element.tagName).toBe('MAIN')
        expect(wrapper.html()).toContain('Main Content')
    })

    it('handles nested components', () => {
        const wrapper = mount(Section, {
            props: { title: 'Test Section', level: 1 },
            slots: {
                default: '<p>Section content</p>',
            },
        })

        expect(wrapper.find('h1').text()).toBe('Test Section')
        expect(wrapper.html()).toContain('<p>Section content</p>')
    })
}) 