const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./client/src/index",
  output: {
    path: path.resolve(__dirname, "clientDist"),
    filename: "[name].[hash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./clientDist",
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./client/src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "forfun",
      template: "./client/public/index.html",
    }),
  ],
}
