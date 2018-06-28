const _ = require('lodash'),
    path = require('path'),
    webpack = require('webpack'),
    {name} = require('./package.json'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');

module.exports = merge(common, {
    bail: true,
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: name + '.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, '/src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json']
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    }
});
