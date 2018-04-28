/*
4.0之后可以不用手动配置webpack.config.js 不过默认入口在src文件夹中

 */

var path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        inline:true,
        open:true,//自动打开浏览器
        hot:true,//热更新
        host:'127.0.0.1',
        port:8080,
},
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),//调用webpack的热更新插件
        new HtmlWebpackPlugin({
            title:'webpack4.0',
            filename:'index.html',
           // jade: 'path/to/yourfile.jade', 可以是html, jade, ejs, hbs。指定对应模板npm install jade-loader --save-dev
            inject:'head', //默认值，script标签位于html文件的 body 底部
            minify:{//压缩HTML
                collapseWhitespace: true,
            },
            hash:true//是否给所有包含的js、css文件后面添加hash值,可以用来清除缓存，但好像不是很管用
        })
    ]
}