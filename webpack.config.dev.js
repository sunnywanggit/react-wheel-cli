// webpack.config.js 只写 webpack.config.dev.js 和 webpack.config.prod.js 共有的内容，其余不共有的内容，分别写入相应的文件即可。
const  base = require('./webpack.config')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//因为 node 不支持 扩展运算符，所以我们这里使用 Object.assign
//最终 target 会拥有两个对象的所有属性，并且第三个对象会覆盖第二个对象的属性
module.exports = Object.assign({},base,{
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    //告诉 webpakc 下面两个东西是属于外部的库，你必须要这样配置，如果你配置错了，你的项目就不能在别人的React项目中运行
    //我们这样做的主要目的是减少打包后的文件大小，使打包后的文件不包含react 和 react-dom 的源码
    // externals: {
    //     //这里告诉的是使用者在引入库时如何引入
    //     react: {commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React',},
    //     'react-dom': {commonjs: 'react-dom', commonjs2: 'react-dom', amd: 'react-dom', root: 'ReactDOM',},
    // }

})
