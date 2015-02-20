'use strict';

var isLowercase = require( './../lib' );

console.log( isLowercase( 'hello' ) );
// returns true

console.log( isLowercase( 'Hello' ) );
// returns false