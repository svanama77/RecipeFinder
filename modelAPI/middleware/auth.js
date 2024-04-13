const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    req.isAuthenticated = false;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      req.isAuthenticated = false;
      return next();
    }

    req.user = user;
    req.isAuthenticated = true;
    next();
  });
}

module.exports = authenticateToken;


