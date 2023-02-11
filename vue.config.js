const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  transformIgnorePatterns: ['/node_modules/(?!lib-to-transform|other-lib)']
})
