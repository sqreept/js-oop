var Object = require('./Object');

function Integer(spec) {

	/* Super call */
	var thisObject = Object(spec);
	var value = spec.value;
	if(typeof value !== 'number' || Math.floor(value)!==value) {
		throw Error('Value argument should be an integer');
	}

	/* Virtual methods */
	thisObject.virtual.toString = function Integer__toString() {
		return '<Integer value='+Integer__toInt()+'>';
	};

	/* Own methods */
	function Integer__toInt() {
		return value;
	}

	/* Add instance public members */
	thisObject.toInt = Integer__toInt;
	return thisObject;
}

/* Make class public */
module.exports = Integer;
