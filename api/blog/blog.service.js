const res = require("express");
const pool = "../../config/database.js";

module.exports = {
  createBlog: (data, callback) => {
    pool.query(
      `insert into blog(id,userId,title,category,Description,publishDate)
            values(?.?,?,?,?,?)`,
      [
        data.id,
        data.userId,
        data.title,
        data.category,
        data.description,
        data.publishDate,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getBlogs: (callback) => {
    pool.query(
      `select id, userId, title, category, Description,publishDate from blog`,
      [],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getBlogByUserId: (userId, callBack) => {
    pool.query(
      `SELECT registration.firstName,registration.lastName,registration.email,blog.publishDate,blog.category,blog.title,blog.Description
      FROM blog 
      JOIN registration  ON blog.userId = registration.id 
      WHERE blog.userId = ?`,
      [userId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateBlog: (data, callBack) => {
    pool.query(
      `update id, userId, title, category, Description,publishDate from blog where id = ?`,
      [
        data.id,
        data.userId,
        data.title,
        data.category,
        data.description,
        data.publishDate,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        if (!results) {
          return res.json({
            error: 404,
            message: "Record not found ❌",
          });
        }
        return callBack(null, results);
      }
    );
  },
  deleteBlog: (data, callBack) => {
    pool.query(
      `delete from blog where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
