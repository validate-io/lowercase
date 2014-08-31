
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isLowercase = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-lowercase', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isLowercase ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isLowercase( 'hello' ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				true,
				function(){},
				null,
				{},
				NaN,
				'Hello',
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isLowercase( values[i] ) );
		}
	});

});