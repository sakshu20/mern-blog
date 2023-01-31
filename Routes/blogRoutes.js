const { getAllBlog, addAllBlog, removeAllBlog, editAllBlog } = require("../Controllers/blogController")

const router = require("express").Router()

router
     .get("/", getAllBlog)
     .post("/add", addAllBlog)
     .delete("/:blogId", removeAllBlog)
     .put("/:blogId", editAllBlog)

module.exports = router