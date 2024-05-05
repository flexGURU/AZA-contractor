// models/Job.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // make sure this points to your actual Sequelize connection file

class Job extends Model {}

// models/Job.js
Job.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  jobType: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  clientName: { type: DataTypes.STRING, allowNull: false },
  clientContact: { type: DataTypes.STRING, allowNull: true },
  details: { type: DataTypes.TEXT, allowNull: true },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }  // Adding price field
}, {
  sequelize,
  modelName: 'Job',
  tableName: 'jobs',
  timestamps: false
});


module.exports = Job;
