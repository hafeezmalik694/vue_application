const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/base_url': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/base_url': ''
        }
      }
    }
  }
})

