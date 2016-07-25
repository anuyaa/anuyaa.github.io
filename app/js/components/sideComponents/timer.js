import React, { Component } from 'react';

export default class Timer extends Component{
	render(){
		const {endDate} = this.props;
		return (
			<div className="timerWrapper">
				<span>{endDate}</span>
			</div>);
	}
}
