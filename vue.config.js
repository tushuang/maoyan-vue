const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    devServer:{
        port:8000,
        proxy:{
            '/my':{
                target:'http://m.maoyan.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/my':''
                }
            }
        }
    },
    chainWebpack (config) {
        config 
            .resolve
            .alias
            .set('@styles',resolve('src/stylesheets'))
            .set('@libs',resolve('src/libs'))
            .set('@c',resolve('src/components'))
            .set('@pages',resolve('src/pages'))
            .set('@utils',resolve('src/utils'))
            .set('@router',resolve('src/router')) 
    }
}