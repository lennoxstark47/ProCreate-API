const express = require('express');
const Router = express.Router();
const User = require('../models/user.model');

Router.route('/').post((req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				if (req.body.password === user.password) {
					return res.json('success');
				}
				return res.status(400).json('wrong password');
			}
			res.status(404).json('User not found');
		})
		.catch((err) =>
			res.status(400).json('Error: ' + err)
		);
});

module.exports = Router;
