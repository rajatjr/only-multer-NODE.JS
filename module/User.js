const { DataTypes } = require('sequelize');
const SE = require('../db')

const Pant_user = SE.define("Pant_user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
username: {
    type: DataTypes.STRING,
    uniwue: true,
    allowNill: false,
    validate: { len: [3, 10],
    is: {
        aggs: /^[a-zA-Z0-9]+$/i,
        msg:'User cn only contain letters and numbers'
    }
    
    }
},

firstname: {
    type: DataTypes.STRING,
    allowNull:false,
    validate: { len: [3, 10]}
},

lastname: {
    type: DataTypes.STRING,
    allowNull:false,
    validate: { len: [3, 15]}
},

email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true }
},

password: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
        notEmpty: true
    }
},

// phone: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNill: true
// },

// otp: {
//     type: DataTypes.STRING,
//     allowNill: true
// },

// isVerified: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
// },

});

module.exports = Pant_user;