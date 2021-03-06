// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const itineraries = sequelizeClient.define('itineraries', {
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    time: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    like: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    unlike: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  itineraries.associate = function (models) { 
    // Define associations here
    itineraries.belongsTo(models.packs);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return itineraries;
};
