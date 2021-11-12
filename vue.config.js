const webpack = require('webpack');

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}