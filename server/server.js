const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
// const enforce = require("express-sslify");
// const sslRedirect = require("heroku-ssl-redirect");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.join(__dirname, "/..", ".env")
  });
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(enforce.HTTPS({ trustProtoHeader: true }));
// app.use(sslRedirect());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/..", "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/..", "client/build", "index.html"));
  });
}

app.get("/service-worker.js", (req, res) => {
  res.send(path.resolve(__dirname, "/..", "client/build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(body, (err, change) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ success: change });
    }
  });
});

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
