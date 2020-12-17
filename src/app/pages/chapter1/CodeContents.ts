export const packageJSON =`
{
  "name": "electron-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  ...
}`;

export const webpackConfigJS = `
const HtmlWebPackPlugin = require("html-webpack-plugin")

  module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: { minimize: true }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ],
    output: {
      path: __dirname + "/build"
    }
  }`;

export const electronTS = `const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

let mainWindow;

//어플리케이션 기동이 종료 후 동작한다.
app.on('ready', () => {
    createWindow();
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1350,
        height: 800,
        useContentSize: true,
        title: 'Digo'
    });

    mainWindow.loadFile('./build_contents/index.html');

    //윈도우 전부를 닫고, null로 지정한다.
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}`;