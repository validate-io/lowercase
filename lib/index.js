/**
*
*	VALIDATE: lowercase
*
*
*	DESCRIPTION:
*		- Validates if a value is a lowercase string.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isLowercase( value )
	*	Validates if a value is a lowercase string.
	*
	* @param {String} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a lowercase string
	*/
	function isLowercase( value ) {
		if ( typeof value !== 'string' ) {
			return false;
		}
		return ( value === value.toLowerCase() );
	} // end FUNCTION isLowercase()


	// EXPORTS //

	module.exports = isLowercase;

})();