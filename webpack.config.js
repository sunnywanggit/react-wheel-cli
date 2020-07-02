const  path = require('path')
module.exports = {
    mode: 'development',
    //程序入口
    entry: {sunnyReactUI: './lib/index.tsx'},
    //程序输出
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'sunnyReactUI',
        //输出格式
        libraryTarget: 'umd'
    },
    module: {
        //配置解析 jsx 方式
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
        ]
    }

}
