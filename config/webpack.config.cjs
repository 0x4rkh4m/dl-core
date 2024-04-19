const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'swc-loader',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.mjs',
            path: path.resolve(__dirname, '../dist'),
            libraryTarget: 'module',
        },
        experiments: {
            outputModule: true,
        },
        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),
            hot: !isProduction,
        },
        optimization: {
            minimize: isProduction,
        },
    };
};