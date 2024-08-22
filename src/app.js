const express = require("express");
const { sequelize } = require("../db/models/index");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, async () => {
	console.log("SERVER UP: http://127.0.0.1:", +PORT);
	try {
		await sequelize.sync();
		console.log("DATABASE SYNCED");
	} catch (error) {
		console.log(error);
	}
});
