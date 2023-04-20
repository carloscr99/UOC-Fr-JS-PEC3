const path = require('path');

module.exports = {
    entry: './app.ts',
    output: {
        filename: './dist/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve:{
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}