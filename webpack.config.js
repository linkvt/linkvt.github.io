const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env, argv) => {
  const styleLoader =
    argv.mode !== "production"
      ? "vue-style-loader"
      : MiniCssExtractPlugin.loader;

  return {
    resolve: {
      extensions: [".js", ".json", ".vue"],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            styleLoader,
            {
              loader: "css-loader",
              options: {
                esModule: false,
                importLoaders: 2, // next two loaders should be applied on imports => postcss-loader, sass-loader
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                esModule: false,
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    output: {
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new HtmlWebPackPlugin({
        template: "src/index.html",
        filename: "index.html",
      }),
      new VueLoaderPlugin(),
    ],
  };
};
