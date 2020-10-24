const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3005;


app.use(express.urlencoded());
app.set("views", "./src/views")
app.set("view engine", "ejs");
app.use(cookieParser());

const indexRouter = require("./src/routes/indexRouter");

app.use("/", indexRouter);


app.listen(port, () => {
    console.log("starting server");
});