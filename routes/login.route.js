const express = require('express');
const Router = express.Router();
const User = require('../models/user.model');

Router.route('/').post((req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				if (req.body.password === user.password) {
					return res.json(user);
				} else {
					return res.json('wrong password');
				}
			} else {
				return res.json('User not found');
			}
		})
		.catch((err) => res.json('Error: ' + err));
});

module.exports = Router;
