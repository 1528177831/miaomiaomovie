module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com/gateway',
        changeOrign: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
