const {
  createBlog,
  getBlogByUserId,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("./blog.controller");

const router = require("express").Router;

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogByUserId);
router.patch("/", updateBlog);
router.delete("/", deleteBlog);

module.exports = router;
