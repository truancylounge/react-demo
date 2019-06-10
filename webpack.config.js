const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        //path: '/Users/lmannur/demo_projects/react-projects/indecision-app/public',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};