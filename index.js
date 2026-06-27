const express = require("express");
const mqtt = require("mqtt");

const app = express();

// MQTT Bağlantısı
const mqttClient = mqtt.connect("mqtt://broker.hivemq.com:1883");

mqttClient.on("connect", () => {
  console.log("MQTT Broker'a bağlandı.");
});

mqttClient.on("error", (err) => {
  console.log("MQTT Hata:", err.message);
});

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

// RÖLE 1
app.get("/r1on", (req, res) => {
  r1 = 1;
  mqttClient.publish("ev/role1", "ON");
  res.send("R1 ON");
});

app.get("/r1off", (req, res) => {
  r1 = 0;
  mqttClient.publish("ev/role1", "OFF");
  res.send("R1 OFF");
});

// RÖLE 2
app.get("/r2on", (req, res) => {
  r2 = 1;
  mqttClient.publish("ev/role2", "ON");
  res.send("R2 ON");
});

app.get("/r2off", (req, res) => {
  r2 = 0;
  mqttClient.publish("ev/role2", "OFF");
  res.send("R2 OFF");
});

// RÖLE 3
app.get("/r3on", (req, res) => {
  r3 = 1;
  mqttClient.publish("ev/role3", "ON");
  res.send("R3 ON");
});

app.get("/r3off", (req, res) => {
  r3 = 0;
  mqttClient.publish("ev/role3", "OFF");
  res.send("R3 OFF");
});

// RÖLE 4
app.get("/r4on", (req, res) => {
  r4 = 1;
  mqttClient.publish("ev/role4", "ON");
  res.send("R4 ON");
});

app.get("/r4off", (req, res) => {
  r4 = 0;
  mqttClient.publish("ev/role4", "OFF");
  res.send("R4 OFF");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Sunucu çalışıyor.");
});
