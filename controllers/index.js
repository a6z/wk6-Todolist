var Msg = require('../models/msg');

module.exports = function(req, res, next) {
	Msg.find({}, function(err, users) {
		if (err) throw err;

		res.render('index', {userinfos: users});
	});
};
