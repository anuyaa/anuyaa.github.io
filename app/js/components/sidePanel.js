import React, { Component , PropTypes} from 'react';
import ReactDOM from 'react-dom';
//import DateTimeUtil from '../services/dateTimeUtil';
import Timer from './sideComponents/timer';
import Hamburger from './sideComponents/hamburger';
import { Select } from '../actions/action-creators';


export default class SidePanel extends Component{

	// <div className="side-row">
	// 	<div className="side-elem"></div>
	// 	<Hamburger onClick={this.props.onHamburgerClick} burgerSize="fa-3x"/>
	// </div>
	render (){
		const dispatch = this.props.dispatch;
		return (
				<div className="side-container" >
					<div className="side-row event-name" onClick={() => dispatch(Select('about'))}>
						<div className="side-elem">
							<img src="./doc/profile.jpeg" title="Ankita Muley"/>
						</div>
					</div>
					<div className="side-row" onClick={() => dispatch(Select('resume'))}>
						<div className="side-elem">
							Resume
						</div>
					</div>
					<div className="side-row" onClick={() => dispatch(Select('project'))}>
						<div className="side-elem">Projects</div>
					</div>
					<div className="side-row" onClick={() => dispatch(Select('contact'))}>
						<div className="side-elem">Contact</div></div>
				</div>
		);
	}
}

SidePanel.propTypes = {
	isPanelOpen : PropTypes.bool.isRequired,
	onHamburgerClick : PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired
	//selected:PropTypes.string
};



// <div className="side-row event-name">
// 	<div className="side-elem">Event Name</div>
// </div>
//
// <div className="side-row"><div className="side-elem">Home Icon</div></div>
// <div className="side-row"><div className="side-elem">Schedule</div></div>
// <div className="side-row"><div className="side-elem">Speakers</div></div>
// <div className="side-row"><div className="side-elem">Tickets</div></div>
//
// <div className="side-row"><div className="side-elem">News</div></div>
// <div className="side-row"><div className="side-elem">Tweets</div></div>
// <div className="side-row"><div className="side-elem">Instagram</div></div>
// <div className="side-row"><div className="side-elem">Facebook</div></div>
// <div className="side-row"><div className="side-elem">Explore</div></div>
//
// <div className="side-row"><div className="side-elem">Sponsors</div></div>
//
// <div className="side-row"><div className="side-elem">Gallery</div></div>
//
// <div className="side-row"><div className="side-elem">Contact</div></div>
//
// <div className="side-row"><div className="side-elem">Register</div></div>
// <div className="side-row"><div className="side-elem"><Timer endDate={endDate}/></div></div>
