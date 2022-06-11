const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");

    if (token) {
      token = token.slice(7);
      verify(token, "abc123", (err, decoded) => {
        if (err) {
          res.json({
            error: 400,
            message: "Invalid Token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        error: 400,
        message: "Access Denied !",
      });
    }
  },
};
