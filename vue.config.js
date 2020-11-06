module.exports = {
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    externals: {
      vue: "Vue"
    },
    output: {
      filename: "vue-tabs-code.js"
    }
  },
  css: {
    extract: {
      filename: "vue-tabs-code.css"
    }
  }
};
