const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = (env, argv) => {
  const styleLoader = argv.mode !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader;

  return {
    resolve: {
      extensions: [".js", ".json", ".vue"]
    },
    module: {
      rules: [{
          test: /\.css$/,
          use: [styleLoader, "css-loader"]
        }, {
          test: /\.scss$/,
          use: [styleLoader, "css-loader", "sass-loader"]
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }]
        },
        {
          test: /\.vue$/,
          use: ["vue-loader"]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(["dist"]),
      new MiniCssExtractPlugin(),
      new HtmlWebPackPlugin({
        template: "src/index.html",
        filename: "index.html"
      }),
      new VueLoaderPlugin()
    ]
  }
};
