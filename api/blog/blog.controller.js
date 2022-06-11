const {
  createBlog,
  getBlogByUserId,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("./blog.service");

module.exports = {
  createBlog: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: 400,
          message: "Database connection error 😫",
        });
      }
      return res.status(200).json({
        success: 200,
        message: "Database Connected 👌",
        data: results,
      });
    });
  },
  getBlogByUserId : (req,res) => {
      const userId = req.params.userId ;
      getBlogByUserId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            error: 404,
            message: "Record not found ❌",
          });
        }
        return res.json({
          success: 200,
          message: "User Found by id ✅",
          data: results,
        });
      });
  },
  getBlogs: (req, res) => {
    getBlogs((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 200,
        message: "Blogs Found ✅",
        data: results,
      });
    });
  },
  updateBlog: (req, res) => {
    const body = req.body;
    updateBlog(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          error: 404,
          message: "Record not found 💀",
        });
      }
      return res.json({
        success: 200,
        message: "updated successfully 👍",
      });
    });
  },
  deleteBlog: (req, res) => {
    const data = req.body;
    deleteBlog(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          error: 404,
          message: "Record Not Found ❌",
        });
      }
      return res.json({
        success: 200,
        message: "Blog deleted successfully 🙂",
      });
    });
  },
};
