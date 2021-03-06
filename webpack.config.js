var webpack = require('webpack');

module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname+'/build/js',
        filename: "client.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
