const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,

    entry: './src/index.js',
    output: {
        filename: mode === 'production' ? 'bundle.js' : 'main.js',
        path: mode === 'production' ? path.resolve(__dirname, 'dist/prod') : path.resolve(__dirname, 'dist/dev')
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },

    /*Source maps for debugging: show actual file instead of minified version*/
    devtool: 'source-map',

    /*Development Server*/
    devServer: {
        static: './dist/dev'
    }
}