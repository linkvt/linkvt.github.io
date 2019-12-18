const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
          test: /\.(css|scss)$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2, // next two loaders should be applied on imports => postcss-loader, sass-loader
              },
            },
            "postcss-loader",
            "sass-loader"
          ]
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
              esModule: false,
              limit: 8192
            }
          }]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.vue$/,
          use: ["vue-loader"]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebPackPlugin({
        template: "src/index.html",
        filename: "index.html"
      }),
      new VueLoaderPlugin()
    ]
  }
};
