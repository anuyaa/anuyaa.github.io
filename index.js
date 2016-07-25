import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './app/js/components/sidePanel';
import Main from './app/js/components/main';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Root extends Component {

	constructor(){
		super();
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.state = { isPanelOpen : true, contentToShow: "about" };
	}

	dispatchHandler (action) {
		console.log("action: "+JSON.stringify(action));
		this.setState(Object.assign({},{contentToShow:action.type}));
	}

	handleHamburgerClick (e){
		e.preventDefault();
		this.setState(Object.assign({},{isPanelOpen : !this.state.isPanelOpen, contentToShow:"about"}));
	}

	handleSelection (e, type){
		e.preventDefault();
		this.setState(Object.assign({},{contentToShow:type}));
	}

	buildHeaderComponent(){
		return (<Header />);
	}

	buildSidePanel(){
		console.log('building side panel');
		return (<SidePanel key={this.state.isPanelOpen}
		  isPanelOpen={this.state.isPanelOpen}
			onHamburgerClick={this.handleHamburgerClick}
			dispatch={this.dispatchHandler.bind(this)} />);
	}

	buildMainComponent(){
		console.log('building main components');
		return (<Main show={this.state.contentToShow} />);
	}

	render(){
		const buildSidePanel = this.buildSidePanel();
		const buildMainComponent = this.buildMainComponent();
		const transitionOptions = {
			transitionName : 'example',
			transitionEnterTimeout : 500,
			transitionLeaveTimeout : 500,
			transitionAppear : true
		};

		// <ReactCSSTransitionGroup component="div" {...transitionOptions}>
		// 	<div key={this.state.isPanelOpen} className={this.state.isPanelOpen ? "wrapper ": "wrapper panelClosed"}>
		// 		{buildSidePanel}
		// 	</div>
		// </ReactCSSTransitionGroup>

		return (
			<div className="root-container">
				<div className={this.state.isPanelOpen ? "wrapper" : "wrapper panelClosed"}>
					{buildSidePanel}
				</div>
				{buildMainComponent}
			</div>);
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('content')
);
