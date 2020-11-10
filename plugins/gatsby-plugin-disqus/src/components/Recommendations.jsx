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
            this.page.title = config.title
            this.page.remote_auth_s3 = config.remoteAuthS3
            this.page.api_key = config.apiKey
            this.language = config.language
        }
    }

    loadInstance() {
        if (typeof window !== 'undefined' && window.document) {
            window.disqus_config = this.getDisqusConfig(this.props.config)
            if (window.document.getElementById('dsq-recs-scr')) {
                this.reloadInstance()
            } else {
                insertScript(this.embedUrl, 'dsq-recs-scr', window.document.body)
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

Recommendations.propTypes = {}
