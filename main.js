const {app, BrowserWindow, ipcMain} = require('electron')

let mainWindow
let pickerDialog

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 600
  });

  pickerDialog = new BrowserWindow({
    parent: mainWindow,
    show: false,
    height: 390,
    width: 680
  })
 mainWindow.setResizable(false);
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  pickerDialog.loadURL('file://' + __dirname + '/picker.html')
});


ipcMain.on('show-picker', (event, options) => {
  pickerDialog.show()
  mainWindow.show()
  pickerDialog.webContents.send('get-sources', options)
})
