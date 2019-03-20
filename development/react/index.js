// External
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var NatfBoard = require('./natf/board.jsx');
var NatfPractice = require('./natf/practice.jsx');

// Export
module.exports = {
	"NATF": {
		"Board": NatfBoard,
		"Practice": NatfPractice
	},
	"React": React,
	"ReactDOM": ReactDOM,
}
