import React from 'react'
import { render } from '@testing-library/react'
// Components
import Disqus from '../src/components/Disqus.jsx'

const disqusConfig = {
    url: 'https://brettstevenson.io/blog/gatsby-disqus/',
    identifier: 'test',
    title: 'Gatsby + Disqus',
}

const Component = () => (
    <Disqus
        data-testid='disqus-thread'
        config={disqusConfig} />
)

test('Has correct attributes', () => {
    const { getByTestId } = render(<Component />)
    expect(getByTestId('disqus-thread')).toHaveAttribute('id', 'disqus_thread')
})
