/*
4.0之后可以不用手动配置webpack.config.js 不过默认入口在src文件夹中

 */

var path = require('path')
const Webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer:{
        inline:true,
        open:true,//自动打开浏览器
        hot:true,//热更新
        host:'127.0.0.1',
        port:8080,
},
    plugins:[
        new Webpack.HotModuleReplacementPlugin() //调用webpack的热更新插件

    ]
}