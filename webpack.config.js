var webpack = require("webpack");
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, "public");
var APP_DIR = path.resolve(__dirname, "src/app");

var config = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./scss", "./node_modules"]
              }
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
