const bcrypt = require("bcryptjs");
const { Users } = require("../../db/models");
const jwtGen = require("../utils/jwtGenerator");

module.exports = {
	register: async (req, res) => {
		const { name, username, email, password, address, phone_number } =
			req.body;
		try {
			const checkUser = await Users.findOne({
				where: { email },
			});
			if (checkUser) {
				return res.status(400).json({ message: "User Already Exist" });
			}
			const bcryptPassword = await bcrypt.hash(
				password,
				bcrypt.genSaltSync(10)
			);

			const newUser = await Users.create({
				name,
				username,
				email,
				role: "ADMIN",
				address,
				phone_number,
				password: bcryptPassword,
			});

			res.status(201).json({
				message: "Success Creating New User",
				user: {
					name: newUser.name,
					username: newUser.username,
					email: newUser.email,
					role: newUser.role,
					address: newUser.address,
					phone_number: newUser.phone_number,
				},
			});
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body;
		try {
			const checkUser = await Users.findOne({
				where: { email },
			});
			if (!checkUser) {
				return res.status(400).send({ message: "User Not found." });
			}
			const passwordIsValid = bcrypt.compareSync(
				password,
				checkUser.password
			);
			if (!passwordIsValid) {
				return res.status(400).send({
					message: "Invalid Password!",
				});
			}

			const token = jwtGen(
				checkUser.dataValues.name,
				checkUser.dataValues.username,
				checkUser.dataValues.email,
				checkUser.dataValues.role,
				checkUser.dataValues.address,
				checkUser.dataValues.phone_number
			);
			return res.json({
				user: {
					id: checkUser.dataValues.id,
					name: checkUser.dataValues.name,
					role: checkUser.dataValues.role,
				},
				accessToken: token,
			});
		} catch (error) {
			console.log(error.message);
			res.status(500).send({ message: err.message });
		}
	},
};
