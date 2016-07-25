import React, {Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './sideComponents/hamburger';


export default class Accordian extends Component{

	constructor(){
		super();
		this.state = { active : true };
		this.toggle = this.toggle.bind(this);
	}

	toggle(e){
		console.log("toggling");
		e.preventDefault();
		this.setState(Object.assign({}, {active : !this.state.active}));
	}

	// <span>
	// 	<Hamburger onClick={this.toggle} burgerSize="fa-lg"/>
	// </span>
	render (){
		const detailActiveClass = this.state.active == true ? 'active' : 'inactive';
		return (
			<div className="accordian-container">
				<div className="summary-container" onClick={this.toggle}>
					{this.props.summary}
				</div>
				<div key={this.props.key} className={detailActiveClass.concat(" detail-container")}>
					{this.props.detail}
				</div>
			</div>
		);
	}
}

Accordian.PropTypes = {
	'summary' : PropTypes.string.isRequired,
	'detail' : PropTypes.string.isRequired,
	'key' : PropTypes.number.isRequired
};
