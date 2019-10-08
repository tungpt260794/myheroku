const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/", router);
app.listen(port, () => console.log(`app listening on port ${port}!`));
