const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules:[
            /*
                Loading JavaScript files with babel transpiler
                Exclude the node_modules 
            */
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
        static: './public'
    }
}