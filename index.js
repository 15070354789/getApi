const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Hengchun Global API",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.get("/auth/tiktok/callback", (req, res) => {
  console.log("TikTok callback query:", req.query);
  res.json({
    platform: "tiktok",
    message: "callback received",
    query: req.query
  });
});

app.get("/auth/shopee/callback", (req, res) => {
  console.log("Shopee callback query:", req.query);
  res.json({
    platform: "shopee",
    message: "callback received",
    query: req.query
  });
});

app.post("/webhook/tiktok", (req, res) => {
  console.log("TikTok webhook body:", req.body);
  res.json({
    platform: "tiktok",
    message: "webhook received"
  });
});

app.post("/webhook/shopee", (req, res) => {
  console.log("Shopee webhook body:", req.body);
  res.json({
    platform: "shopee",
    message: "webhook received"
  });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
