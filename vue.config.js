module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      loaders: [{
        test: /\.scss$/,
        use:[
          'vue-style-loader',
          'css-loader',
          'sass-loader'  
        ]
      }]
    }

  }
};
