import {ipcRenderer, contextBridge} from 'electron';

contextBridge.exposeInMainWorld('electron', {
   //TODO: add custom api...
});