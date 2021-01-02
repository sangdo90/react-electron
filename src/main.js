import { app, BrowserWindow } from 'electron';

const createWindow = () => {
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