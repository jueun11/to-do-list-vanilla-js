const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    //현재경로 하위에 dist 폴더를 의미한다.
  },
  Plugins: [new Htmlwebpackplugin()],
};
