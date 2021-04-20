const e = require("express");
const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => { 
    const Pokemon = sequelize.define('Pokemon', {
        nome: Sequelize.STRING,
        numero: Sequelize.STRING,
        tipo: Sequelize.STRING,
        geracao: Sequelize.STRING
    })
    return Pokemon;  
}