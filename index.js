const { app, BrowserWindow } = require("electron");
let win;

app.on("ready", function () {
  win = new BrowserWindow({ width: 1600, height: 950 });

  win.loadURL(`file://${__dirname}/index.html`);
});
