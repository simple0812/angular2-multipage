var db = require('./db');
var Sequelize = require('sequelize');
var common = require('../utils/common');

var RemoteDevice = db.define('remoteDevice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(100),
        defaultValue: ''
    },
    type: { //1:反应器,2:清洗机,3:灌流，
        type: Sequelize.INTEGER,
    },
    customerId: {
        type: Sequelize.INTEGER,
    },
    clientId: {
        type: Sequelize.STRING(50),
        defaultValue: '',
        unique: true
    },
    description: {
        type: Sequelize.STRING(50),
        defaultValue: ''
    },
    address: {
        type: Sequelize.STRING(100),
        defaultValue: ''
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    createdAt: {
        type: Sequelize.BIGINT(13),
    }

}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'remoteDevice'
});

RemoteDevice.hook('beforeCreate', function(model, options, fn) {
    model.createdAt || (model.createdAt = common.getTime());
    fn(null, model);
});

module.exports = RemoteDevice;