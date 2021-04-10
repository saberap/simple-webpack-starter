const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  entry: ["whatwg-fetch", "./src/index.js"],
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          //For inline style use style-loader
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  //target: "web",

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
  },
};
