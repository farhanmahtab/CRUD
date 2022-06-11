const {
  create,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
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
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
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
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 200,
        message: "Users Found ✅",
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
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
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
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
        message: "user deleted successfully 🙂",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log("Database Error");
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          error: 404,
          data: "Invalid email or password 🐱‍👤",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "abc123", {
          expiresIn: "1h",
        });
        return res.json({
          success: 200,
          message: "Login successfully ✔",
          token: jsontoken,
        });
      } else {
        return res.json({
          error: 400,
          data: "Invalid Email or Password 🐱‍👤",
        });
      }
    });
  },
};
