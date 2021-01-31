const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
 

const { Notification } = require('electron')

function showNotification () {
  const notification = {
    icon: 'logo.png',
    title: 'BreakTime',
    body: 'Is currently running'
  }
  new Notification(notification).show()
}

app.whenReady().then(showNotification)
