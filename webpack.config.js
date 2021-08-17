const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    filename: "bundle.[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //css 코드를 웹페이지 안에 스타일 태그로 주입해주는 로더
          "css-loader", //css을 읽어서 webpack으로 가져오라
          //뒷쪽에 있는 로더가 먼저 실행된다.
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: "./public/index.html",
        filename: "./index.html",
        chunks: ["index"],
      },
      {
        //여러개 output을 만들때
        template: "./public/about.html",
        filename: "./about.html",
        chunks: ["about"],
      }
    ), //html을 템플릿으로 하여 웹팩으로 번들링을 했을때 dist에 최종 완성된 html이 저장될 수 있도록 하는 역할
  ],
  devServer: {
    host: "localhost",
    port,
    open: true,
  },
};
