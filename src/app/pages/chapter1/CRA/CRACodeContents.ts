export const ProjectSetup = `
$ npx create-react-app Project-name --typescript
$ cd Project-name`;

export const installElectronTools = `
$ yarn add --dev electron electron-builder concurrently wait-on cross-env
`;


export const installIsDev = `$ yarn add electron-is-dev`;


export const elecIsDevInstall = `
$ yarn add electron-is-dev
`;

export const electronJs = `

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            devTools: isDev,
        },
    });


    // 개발 환경일 경우 webpack을 통해 빌드된 화면을 Electron 애플리케이션에서 실행
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : path.join(__dirname, "../build/index.html")
    );

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.setResizable(true);
    mainWindow.on('closed', () => (mainWindow = null));
    mainWindow.focus();
}

// Electron이 로드된 직후 한번만 발생
app.on("ready", createWindow);

// 모든 윈도우를 닫을 때 발생
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// 애플리케이션이 활성화될 때 발생
// 처음 애플리케이션을 실행할 때, 애플리케이션을 실행 중이지만 또 다시 실행할 때, 또는 애플리케이션의 독이나 작업표시줄 아이콘을 클릭할 때 등
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
`;

export const packageJson = `{
    ...

    "main": "public/electron.js",
    "homepage": "./",

    ...

    "scripts": {
        "react-start": "react-scripts start",
        "react-build": "react-scripts build",
        "react-test": "react-scripts test",
        "react-eject": "react-scripts eject",
        "start": "concurrently \\"cross-env NODE_ENV=development BROWSER=none yarn react-start\\" \\"wait-on http://localhost:3000 && electron .\\"",
        "build": "yarn react-build && electron-builder",
        "release": "yarn react-build && electron-builder --publish=always"
    },

    ...

}`;

export const yarnStart = `$ yarn start`;


