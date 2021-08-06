const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: __dirname,
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    devtool: slsw.lib.webpack.isLocal ? 'eval-cheap-module-source-map' : 'source-map',
    resolve: {
        extensions: ['.js'],
        symlinks: false,
        cacheWithContext: false,
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "styles", to: "styles" },
            ],
        }),
    ],
};