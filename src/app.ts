import express from "express";
import path from "path";

export const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});
