/**
 * Created by kerwin on 16/2/25.
 */
var mongoose = require('mongoose');
var MenuSchema = require('../schemas/MenuSchema');
var Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;

