const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    //程序入口
    entry: {sunnyReactUI: './lib/index.tsx'},
    //程序输出
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'sunnyReactUI',
        //输出格式
        libraryTarget: 'umd'
    },
    resolve: {extensions: ['.ts', '.tsx', '.js', '.jsx'],},
    module: {
        //配置解析 jsx 方式
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    //告诉 webpakc 下面两个东西是属于外部的库，你必须要这样配置，如果你配置错了，你的项目就不能在别人的React项目中运行
    //我们这样做的主要目的是减少打包后的文件大小，使打包后的文件不包含react 和 react-dom 的源码
    externals: {
        //这里告诉的是使用者在引入库时如何引入
        react: {commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React',},
        'react-dom': {commonjs: 'react-dom', commonjs2: 'react-dom', amd: 'react-dom', root: 'ReactDOM',},
    }

}
