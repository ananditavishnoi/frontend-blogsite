const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
    var blogs;

    axios.get("https://backend-blogsite.herokuapp.com/blog").then(response => {
        blogs = response.data;
        console.log(blogs);
        res.render(
            "index", {
                blogs
            }
        )
    })
});
module.exports = router;