import React from 'react'
import PropTypes from 'prop-types'
import { insertScript, removeScript, shallowComparison } from '../utils'


export default class Recommendations extends React.Component {

    constructor(props) {
        super(props)
        this.shortname = (GATSBY_DISQUS_SHORTNAME && GATSBY_DISQUS_SHORTNAME.length) ? GATSBY_DISQUS_SHORTNAME : ''
        this.recommendationsUrl = (GATSBY_DISQUS_RECS_URL && GATSBY_DISQUS_RECS_URL.length) ? GATSBY_DISQUS_RECS_URL : `https://${this.shortname}.disqus.com/recommendations.js`

        if (props.config) {
            this.config = props.config
        } else {
            this.config = {
                identifier: props.identifier,
                url: props.url,
                title: props.title,
            }
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined' && window.document && this.shortname) {
            this.cleanInstance()
        }
        this.loadInstance()
    }

    shouldComponentUpdate(nextProps) {
        if (this.props === nextProps) {
            return false
        }
        return shallowComparison(this.props, nextProps)
    }

    componentDidUpdate() {
        this.loadInstance()
    }


    loadInstance() {
        if (typeof window !== 'undefined' && window.document && this.shortname) {
            if (!window.document.getElementById('disqus-recommendations-script'))
                insertScript(this.recommendationsUrl, 'disqus-recommendations-script', window.document.body)
        }
    }

    cleanInstance() {
        removeScript('disqus-recommendations-script', window.document.body)
        if (window && window.DISQUS_RECOMMENDATIONS) {
            window.DISQUS_RECOMMENDATIONS.reset()
        }
        try {
            delete window.DISQUS_RECOMMENDATIONS
        } catch (error) {
            window.DISQUS_RECOMMENDATIONS = undefined
        }
        const thread = window.document.getElementById('disqus_recommendations')
        if (thread) {
            while (thread.hasChildNodes()) {
                thread.removeChild(thread.firstChild)
            }
        }
    }

    render() {
        const { config, ...props } = this.props
        return (
            <div id='disqus_recommendations' {...props} />
        )
    }
}

Recommendations.propTypes = {}
