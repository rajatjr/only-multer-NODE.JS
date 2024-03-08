const Sequelize = require("sequelize");

const SE = new Sequelize(
    'db_sdirect',
    'sdirect',
    'Sm@rtPu92023',
    {
        host: '192.168.0.2',
        dialect: 'mysql'
    }
);

SE.authenticate().then(()=>{
    console.log('Connection has been established Succesfully.');
}).catch((error)=>{
    console.error('Unable to created Succesfully:', error);
});

SE.sync().then(()=>{
    console.log('Rajat_user table created sussessfully');
}).catch((error)=>{
    console.error('Unable to create table ; ',error);
});

module.exports = SE;


//user name- rajat
//email - rajat@gmail.com
//password -12345

//name - rohit
//email - rohit12@gmail.com
//password -123456

//name- mohan
//email- mohan@gmail.com
//password -123456

//name - sagar
//email - sagar@gmail.com
//password -123456

//name - ankit
//email - ankit@gmail.com
//password -123456