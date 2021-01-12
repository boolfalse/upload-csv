'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fail = sequelize.define('Fail', {
    line: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    err_message: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "Something went wrong!"
    }
  }, {
    tableName: 'fail',
    freezeTableName: true,
    // underscored: true,
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });

  // use associations with "Fail"

  return Fail;
};
