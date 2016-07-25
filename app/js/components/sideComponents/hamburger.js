import React, {Component,PropTypes} from 'react';

export default class Hamburger extends Component{
	render (){

		return(
		<div className="hamburger" onClick={this.props.onClick}>
			<i className={this.props.burgerSize.concat(" fa fa-bars")} aria-hidden="true"></i>
		</div>);
	}
}

Hamburger.PropTypes = {
	'onClick' : PropTypes.func.isRequired,
	'burgerSize' : PropTypes.string.isRequired
};
