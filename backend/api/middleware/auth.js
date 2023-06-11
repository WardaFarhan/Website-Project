const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('auth-token');

  if (!token)
    return res.status(401).send({
      'Auth Error': 'Access denied. No auth-token provided in request header',
    });

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res
      .status(400)
      .send({ 'auth-token error': 'Invalid auth-token in request header' });
    next();
  }
};
