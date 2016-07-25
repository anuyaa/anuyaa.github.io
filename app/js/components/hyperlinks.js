import React, {Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';

export default class Hyperlinks extends Component{

	render(){
		return (
			<div className="hyperlink-container">
				<a href={this.props.address} target="_blank" >{this.props.text}</a>
			</div>
		);

	}

}

Hyperlinks.PropTypes = {
	'address' : PropTypes.string.isRequired,
	'text'	: PropTypes.string.isRequired
};
