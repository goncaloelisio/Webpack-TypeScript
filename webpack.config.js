const path = require('path');

module.exports = {
    mode: 'develpment',
    devtool: 'eval-source-map', // helps to fix errors in dev
    entry: './src/index.ts',
    module: {
        rules:[
            {
                test: /\.ts$/,    // $ - in the end, \ looking to .ts
                use: 'ts-loader',
                include:[path.resolve(__dirname, 'src')]      //where webpack should be
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        publicPath: 'public', // allows to know from where comes the serve, shows the changes in real time
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}