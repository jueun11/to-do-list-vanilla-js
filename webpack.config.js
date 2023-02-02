const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    //현재경로 하위에 dist 폴더를 의미한다.
  },
  module: {
    // rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    rules: [
      { test: /\.css$/, use: [MinicssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MinicssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
};
