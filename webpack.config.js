module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/, 
                exclude: /node_module/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    devtool: false, // elimina los devtools en el main.js
    resolve: {
        extensions: ['.ts', '.js']
    }
}