const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);
  console.log(req.body);
  next();
});

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  const data = req.query;
  console.log(data);
  res.render("login", { data: data });
});

app.get("/callback", (req, res) => {
  const data = req.query;
  console.log("from callback get");
  console.log(data);
  res.render("callback", { data: data });
});

app.post("/callback", (req, res) => {
  const data = req.query;
  console.log("from callback post");
  console.log(data);
  res.send("Hello World!");
});

app.get("/auth", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send({
    auth: 1,
    username: "13811110000",
    usergroup: "/ruijie",
    url: "http://www.ruijie.com.cn",
    timeout: 60,
    uplinklimit: 10240,
    downlinklimit: 10240,
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// http://captive-portal.ifew.me
// 128.199.172.245