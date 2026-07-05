const express = require("express");
const os = require("os");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// System info
app.get("/api/info", (req, res) => {
  res.json({
    node: process.version,
    platform: os.platform(),
    hostname: os.hostname(),
    uptime: process.uptime()
  });
});

// Live time
app.get("/api/time", (req, res) => {
  res.json({
    time: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
