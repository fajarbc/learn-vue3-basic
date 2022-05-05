module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: process.env.VUE_BACKEND_HOST,
                changeOrigini: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}