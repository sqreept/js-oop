/* Static property */
var cnt = 0;

/* Constructor definition */
function Object(spec) {

	/* Private vars */
	var objectId = Math.floor(1000000 + 8999999*Math.random());

	/* Virtual table */
	var virtual = {};

	/* Own methods */
	function Object__clone() {
		if(!virtual.hasOwnProperty('clone')) {
			return Object(spec);
		}
		return virtual.clone();
	}
	function Object__hashCode() {
		if(!virtual.hasOwnProperty('hashCode')) {
			return objectId;
		}
		return virtual.hashCode();
	}
	function Object__toString() {
		if(!virtual.hasOwnProperty('toString')) {
			return '<Object@'+Object__hashCode()+'>';
		}
		return virtual.toString();
	}

	/* Static property access from constructor */
	cnt++;

	/* Return instance public members */
	return {
		virtual: virtual,
		hashCode: Object__hashCode,
		toString: Object__toString,
		clone: Object__clone
	};
}

/* Static method */
Object.count = function Object__count() {
	return cnt;
};

/* Make class public */
module.exports = Object;
