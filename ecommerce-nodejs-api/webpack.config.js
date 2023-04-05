const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: { node: 'current' } }],
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};
