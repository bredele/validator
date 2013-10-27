
/**
 * Dependencies
 */

var Doors = require('doors');


/**
 * Expose 'Validator'
 */

module.exports = Validator;


/**
 * Validator constructor.
 * @api public
 */

function Validator() {
	this.validations = {};
	this.doors = new Doors('validator');
}


/**
 * Add validation.
 * 
 * @param {String}   name
 * @param {Function} callback
 * @param {Boolean}   required 
 * @api public
 */

Validator.prototype.add = function(name, callback, required) {
	this.validations[name] = callback;
	if(required || true) this.doors.add(name);
};


/**
 * Set 
 * @param {String} name  
 * @param {Any} value
 * @api public
 */

Validator.prototype.set = function(name, value) {
	this.doors.toggle(name, this.validations[name](value));
};

