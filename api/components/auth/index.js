const store = require('../../../store/mysql'); //Nuestra base de datos
const ctrl = require('./controller'); //const controller

module.exports = ctrl(store); //inyectamos el store, controller como función