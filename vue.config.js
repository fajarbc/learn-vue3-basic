module.exports = {
    publicPath: process.env.VUE_ENV_MODE === 'production'
    ? '/learn-vue3-basic/'
    : '/',
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