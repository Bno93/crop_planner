const { app, BrowserWindow } = require('electron')

function createWindow() {
  win = new BrowserWindow({width: 800, heigh: 600});

  win.loadFile('index.html');
}


app.on('ready', createWindow);