const _ = require('lodash'),
    crypto = require('crypto');

const pkg = require('./package.json'),
    version = pkg.version,
    cssModuleVersion = crypto.createHash('md5').update(version).digest('base64').substr(1, 8);

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: function (absPath) {
                    return /node_modules/.test(absPath) && !_.includes(absPath, 'delay-promise');
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {modules: false}],
                            'react',
                            'stage-0'
                        ]
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true,
                            localIdentName: `${cssModuleVersion}-[hash:base64:5]`
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.md$/,
                use: 'raw-loader'
            },
            {
                test: function (absPath) {
                    return /\.svg$/.test(absPath) && !_.includes(absPath, 'webfonts');
                },
                use: [
                    'babel-loader',
                    'react-svg-loader?' + JSON.stringify({svgo: {plugins: [{cleanupIDs: false}]}})
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }
        ]
    }
};
