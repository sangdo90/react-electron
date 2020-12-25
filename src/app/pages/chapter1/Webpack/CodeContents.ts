export const ProjectSetup=`
mkdir Project-name
cd Project-name
npm init -y`;


// tpyescript setup
export const tsSetup=`npm install typescript --save-dev`;
export const tsConfig1=`touch tsconfig.json`;
export const tsConfig2=`tsc --init`;
export const tsConfigJson =`
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "jsx": "react",
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        },
    }
}
`;

// electron setup
export const elecInstall=`npm install electron --save-dev`;
export const elecSetup=`
mkdir src && cd src
touch index.html main.ts
`;

export const indexHtml=`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>
`;

export const mainTs =`
import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
    let win = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.on('ready', createWindow);
`;

// webpack Setup
export const webpackInstall =`npm install webpack webpack-cli html-webpack-plugin ts-loader --save-dev`;
export const webpackConfig =`
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function srcPaths(src) {
    return path.join(__dirname, src);
  }

const electronConfiguration = {
    mode: 'development',
    entry: './src/main.ts',
    target: 'electron-main',
    resolve: {
        alias: {
            '@': srcPaths('src'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\\.ts$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }]
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    }
}

const reactConfiguration = {
    mode: 'development',
    entry: './src/renderer.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    resolve: {
        alias: {
            '@': srcPaths('src'),
            '@app': srcPaths('src/app'),
            '@pages': srcPaths('src/app/pages'),
            '@routes': srcPaths('src/app/routes'),
            '@components': srcPaths('src/app/components'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            },
            {
                test: /\\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'renderer.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/in

module.exports = [
    electronConfiguration,
    reactConfiguration
];
`;

export const reactSetup = `npm install --save-dev react react-dom @types/react @types/react-dom`;
export const rendererTsx=`
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app';

ReactDOM.render(<App />, document.getElementById('root'));
`;

export const appTsx = `
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello Electron React</h1>
    </div>
  );
}

export default App;
`;

export const packageJson = `
...
"scripts": {
  "build": "webpack",
  "start": "npm run build && electron dist/main.js"
},
...
`;



export const InstallContents = `
# 1. Install
\`\`\`
mkdir electron-react-app
cd electron-react-app
npm init
npm install electron --save-dev
\`\`\`
### electron-react-app/package.json
\`\`\`json
{
  "name": "electron-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  ...
}
\`\`\`
`;
