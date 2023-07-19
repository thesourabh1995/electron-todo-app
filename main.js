const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

// process.env.ELECTRON_ENABLE_LOGGING = true;
// app.commandLine.appendSwitch('remote-debugging-port', '9222');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title:"App",
        width:1000,
        height:600,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:true,
            preload:path.join(__dirname, 'preload.js')
        }
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        // pathname: path.join(__dirname, 'build/index.html'),
        protocol:'file',
        slashes:true
    });

    // mainWindow.loadURL(startUrl);
    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createMainWindow);
