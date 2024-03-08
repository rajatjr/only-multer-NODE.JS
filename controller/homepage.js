const rajat_user = require('../module/User')
const bcrypt = require('bcrypt')
const {op} = require('sequelize');
// const express - require('express');

exports.home = (req,res) =>{
    res.render('login')
}
exports.forget = (req,res) =>{
    res.render('forget')
}
exports.create = (req,res) =>{
    res.render('signup')
}
exports.upload = (req,res) =>{
    res.render('profile')
}

exports.del = (req,res) =>{
    res.render('delete')
}
