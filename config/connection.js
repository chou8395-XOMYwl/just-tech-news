const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('just_tech_news_db', 'root', 'Goclark12!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;