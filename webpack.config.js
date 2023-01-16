const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', 

    plugins: [new MiniCSSExtractPlugin()],
    
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCSSExtractPlugin.loader,'css-loader', 'sass-loader', 'postcss-loader']
            },
            
        ]
    },

    devtool: 'source-map'
};