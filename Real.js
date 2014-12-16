var Object = require('./Object');

function Real(spec) {

	/* Super call */
	var thisObject = Object(spec);

	/* Load constructor arguments */
	var value = spec.value;
	if(typeof value !== 'number') {
		throw Error('Value argument should be a number');
	}

	/* Virtual methods */
	thisObject.virtual.toString = function Real__toString() {
		return '<Real value='+Real__toDouble()+'>';
	};

	/* Own methods */
	function Real__toDouble() {
		return value;
	}

	/* Add instance public members */
	thisObject.toDouble = Real__toDouble;
	return thisObject;
}

/* Make class public */
module.exports = Real;
