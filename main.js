const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 250
    })

    win.loadFile('index.html')
    win.setFullScreen(false)
    win.setFullScreenable(false)
    win.setResizable(false)
    win.removeMenu()
}

app.whenReady().then(()=> {
    createWindow()
})

//Electron launch parameters
