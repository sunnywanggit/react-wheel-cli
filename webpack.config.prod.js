// webpack.config.js 只写 webpack.config.dev.js 和 webpack.config.prod.js 共有的内容，其余不共有的内容，分别写入相应的文件即可。
const base = require('./webpack.config.dev')

module.exports = Object.assign({},base,{
    mode: 'production',
    //告诉 webpakc 下面两个东西是属于外部的库，你必须要这样配置，如果你配置错了，你的项目就不能在别人的React项目中运行
    //我们这样做的主要目的是减少打包后的文件大小，使打包后的文件不包含react 和 react-dom 的源码
    externals: {
        //这里告诉的是使用者在引入库时如何引入
        react: {commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React',},
        'react-dom': {commonjs: 'react-dom', commonjs2: 'react-dom', amd: 'react-dom', root: 'ReactDOM',},
    }

})
