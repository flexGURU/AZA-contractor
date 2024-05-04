const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jobscheduler', 'root', 'Flex088#', {
  host: 'localhost',
  port:33306,
  dialect: 'mysql'
});


sequelize.authenticate().then(() => {
    console.log("connection success");
}).catch((err) => {
    console.log("error connecting",err)
})
module.exports = sequelize;

console.log("ANOTHER TASK")