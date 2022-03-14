const express = require("express");
var cors = require("cors");
const messagesRouter = require("./routes/api/v1/messages");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.set("view engine", "pug");

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", { title: "hey" });
});
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
