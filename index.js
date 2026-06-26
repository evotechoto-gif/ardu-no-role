const express = require("express");
const app = express();

let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;

app.get("/", (req, res) => {
  res.send("Arduino Role Sunucusu Çalışıyor");
});

app.get("/status", (req, res) => {
  res.send(`R1=${r1}\nR2=${r2}\nR3=${r3}\nR4=${r4}`);
});

app.get("/r1on", (req, res) => { r1 = 1; res.send("OK"); });
app.get("/r1off", (req, res) => { r1 = 0; res.send("OK"); });

app.get("/r2on", (req, res) => { r2 = 1; res.send("OK"); });
app.get("/r2off", (req, res) => { r2 = 0; res.send("OK"); });

app.get("/r3on", (req, res) => { r3 = 1; res.send("OK"); });
app.get("/r3off", (req, res) => { r3 = 0; res.send("OK"); });

app.get("/r4on", (req, res) => { r4 = 1; res.send("OK"); });
app.get("/r4off", (req, res) => { r4 = 0; res.send("OK"); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Sunucu çalışıyor.");
});
