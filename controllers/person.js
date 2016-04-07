var Msg = require('../models/msg');

module.exports = function(req, res, next) {
	//res.send('Already Save!');
	var message = new Msg({
		name: req.body.name,
		content: req.body.content
	});
	message.save(function(err){
		if (err) throw err;
		console.log('Message saved!');
	Msg.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		});
	});
};
