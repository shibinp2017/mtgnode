/**
 * Views Global Configuration
 */
var config = require('../../config/mtgnode');

module.exports = function (req, res, ok) {

  // Card Display Driver
  res.locals.CARD_DRIVER = config.driver;

  // Session relevant information
  if (req.session.authenticated)
    res.locals.SESSION = {
      uid: req.session.user.id,
      username: req.session.user.username
    }

  return ok();
};
