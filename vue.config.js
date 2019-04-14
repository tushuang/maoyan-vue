const path = require("path");

function resolve(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      "/my": {
        target: "http://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/my": ""
        }
      },
      "/ps": {
        target: "http://api.map.baidu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/ps": ""
        }
      },
      "/zq": {
        target: "http://movie.banzheshenghuo.com",
        changeOrigin: true,
        pathRewrite: {
          "^/zq": ""
        }
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("@styles", resolve("src/stylesheets"))
      .set("@libs", resolve("src/libs"))
      .set("@c", resolve("src/components"))
      .set("@pages", resolve("src/pages"))
      .set("@utils", resolve("src/utils"))
      .set("@router", resolve("src/router"))
      .set("@assets", resolve("src/assets"));
  }
};
