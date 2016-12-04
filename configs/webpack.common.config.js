 module.exports = {
     entry: './index.js',
     output: {
         path: './bin',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                     presets: ['babel-preset-es2015']
                    }
         }]
     }
 }