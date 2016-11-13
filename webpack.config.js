module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    }
};
