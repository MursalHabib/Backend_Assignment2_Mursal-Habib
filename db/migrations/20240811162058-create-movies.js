"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Movies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			synopsis: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			trailer_url: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			img_url: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			rating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Movies");
	},
};
