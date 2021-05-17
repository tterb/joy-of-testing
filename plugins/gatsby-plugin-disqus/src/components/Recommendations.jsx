import React from 'react'
import PropTypes from 'prop-types'
import { insertScript, removeScript, shallowComparison } from '../utils'


export default class Recommendations extends React.Component {

    constructor(props) {
        super(props)
        this.shortname = (GATSBY_DISQUS_SHORTNAME && GATSBY_DISQUS_SHORTNAME.length) ? GATSBY_DISQUS_SHORTNAME : ''
        this.recommendationsUrl = (GATSBY_DISQUS_RECS_URL && GATSBY_DISQUS_RECS_URL.length) ? GATSBY_DISQUS_RECS_URL : `https://${this.shortname}.disqus.com/recommendations.js`
    }

    componentDidMount() {
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

    componentWillUnmount() {
        this.cleanInstance()
    }

    getDisqusConfig(config) {
        return function() {
            this.page.identifier = config.identifier
            this.page.url = config.url
        }
    }

    loadInstance() {
        if (typeof window !== 'undefined' && window.document) {
            window.disqus_config = this.getDisqusConfig(this.props.config)
            if (window.document.getElementById('dsq-recs-scr')) {
                this.reloadInstance()
            } else {
                insertScript(this.recommendationsUrl, 'dsq-recs-scr', window.document.body)
            }
        }
    }

    reloadInstance() {
        if (window && window.DISQUS_RECOMMENDATIONS) {
            window.DISQUS_RECOMMENDATIONS.reset({
                reload: true,
            })
        }
    }

    cleanInstance() {
        removeScript('dsq-recs-scr', window.document.body)
        try {
            delete window.DISQUS_RECOMMENDATIONS
        } catch (error) {
            window.DISQUS_RECOMMENDATIONS = undefined
        }
        const recommendations = window.document.getElementById('disqus_recommendations')
        if (recommendations) {
            while (recommendations.hasChildNodes()) {
                recommendations.removeChild(recommendations.firstChild)
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

Recommendations.propTypes = {
    config: PropTypes.shape({
       /*
        * Allows the Disqus service to identify the thread on the current page.
        * This is used to exclude the current page from the Recommendations.
        */
        identifier: PropTypes.string,
        /*
        * Allows the Disqus service to identify the thread on the current page.
        * This is used to exclude the current page from the Recommendations.
        * (If undefined, Disqus will use the global.location.href)
        */
        url: PropTypes.string,
    }),
}
