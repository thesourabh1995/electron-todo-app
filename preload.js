const {contextBridge, ipcRenderer }  = require("electron");
const os = require("os");

contextBridge.exposeInMainWorld('electron', {
    homeDir :  os.homedir(),
    osVersion :  os.version(),
    osArch :  os.arch()
})