import React from 'react'
import { render } from '@testing-library/react'
// Components
import CommentCount from '../src/components/CommentCount.jsx'

const disqusConfig = {
    url: 'https://example.com/blog/test',
    identifier: 'test',
    title: 'Test',
}

const Component = () => (
    <CommentCount
        data-testid='comment-count'
        config={disqusConfig}
        placeholder={'...'} />
)

test('Has correct attributes', () => {
    const { getByTestId } = render(<Component />)
    expect(getByTestId('comment-count')).toHaveAttribute('data-disqus-url', disqusConfig.url)
    expect(getByTestId('comment-count')).toHaveAttribute('class', 'disqus-comment-count')
})

test('Displays the correct placeholder text', () => {
    const { getByTestId } = render(<Component />)
    expect(getByTestId('comment-count')).toHaveTextContent('...')
})
