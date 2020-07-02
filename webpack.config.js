module.exports = {
    //程序入口
    entry: {index: './lib/index.tsx'},
    module: {
        //配置解析 jsx 方式
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
        ]
    }

}
