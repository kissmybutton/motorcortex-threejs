const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./demo/index.js"],
  resolve: {
    extensions: [".js"],
    modules: [path.resolve("./"), "node_modules"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    watchContentBase: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: false,
    hot: false,
    contentBase: "./demo/",
  },
};
