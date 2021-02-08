const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({ width: 800, heigh: 600, icon:'images/favicon.png'});
  // comment to debug app
  // win.setMenu(null);
  win.loadFile('index.html');
}


app.on('ready', createWindow);
