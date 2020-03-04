const babelOptions = {
    presets: ['babel-preset-gatsby-package'],
}
module.exports = require('babel-jest').createTransformer(babelOptions)
