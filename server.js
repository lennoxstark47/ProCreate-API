const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const loginRouter = require('./routes/login.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((res) =>
		console.log('MongoDb connected .....')
	)
	.catch((err) => console.log(err));

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
