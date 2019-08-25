const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#folderwin').addEventListener('click', folderwin)
 
  })
  
  const folderwin = () => {
    var pass=document.getElementById("pwd").value;
    if(pass == "vijay"){
    ipcRenderer.send('show-picker', { types: ['screen'] })
    }
  }
