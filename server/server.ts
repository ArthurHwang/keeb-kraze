const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production")
  require("dotenv").config({
    path: "../.env"
  });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("/client/build")));

  app.get("*", (req: any, res: any) => {
    res.sendFile(path.join("/client/build", "index.html"));
  });
}

app.post("/payment", (req: any, res: any) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(body, (err: any, change: any) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ success: change });
    }
  });
});
app.listen(port, (error: Error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
