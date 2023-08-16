// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设计图 750， 调成1倍 375
      viewportWidth: 375
    }
  }
}
