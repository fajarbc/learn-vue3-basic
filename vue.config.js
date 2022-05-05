module.exports = {
    publicPath: process.env.VUE_APP_ENV_MODE === 'production'
    ? '/learn-vue3-basic/'
    : '/',
    devServer: process.env.VUE_APP_ENV_MODE === 'production'
    ? {} 
    : {
        proxy: {
            '^/api': {
                target: process.env.VUE_APP_BACKEND_HOST,
                changeOrigini: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}