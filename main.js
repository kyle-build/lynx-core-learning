const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
const parseMarkdown = require('./core/parser')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('renderer/index.html')
}

app.whenReady().then(createWindow)

// 打开文件
ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (result.canceled) return null

  const filePath = result.filePaths[0]
  const content = fs.readFileSync(filePath, 'utf-8')

  const html = parseMarkdown(content)

  return { filePath, html }
})