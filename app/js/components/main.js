import React, {Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian';
import Hyperlinks from './hyperlinks';

export default class Main extends Component{

	buildAboutContent(){
		return (
			<div className="subcontainer">
				<div className="about-container">
					<h3>About me</h3>
					Hi there, My name is Ankita Muley.
					I am a 2015 Computer Science graduate of Northeastern University.
					I am a Software Engineer at Cisco Systems, Boxborough, MA.
					At Cisco, I am developing Context Service, a cloud storage service.
					I am extensively involved in design and development of context service.
					<br/>
					I have two years of cumulative experience as a Software Engineer.
					I worked at Hoyos Labs, LLC , where I developed a client portal for the company.
					I graduated from Northeastern University in 2015. While studying at Northeastern,
					I got an opportunity to work with Schneider Electric as a coop
					where I learned a new framework Rich Client Platform and contributed extensively
					towards the design and enhancement of the existing RCP application named EcoStream.
					Additionally, I have worked as a web developer in India where I developed web modules based
					for a website which used WAMP application server platform.
					<br/>
					Through my college and work experience, I have developed a strong background and
					interest in software application development as well as web applications development.
					I have worked in major computer languages both academically and professionally
					and out of which I am most like working is Java, JavaScript.
					I stongly believe that a quality software product is a result of thoughtful design,
					strong architecture, extensive testing, and ease to use interface.
					<br/>
					On a personal note, my hobbies are travelling, hiking, listening music, reading books.
					Thank you for taking time to know me.
				</div>
			</div>);
	}

	buildResumeContent(){
		return (
			<div className="subcontainer">
				<object data="./doc/Muley_Ankita.pdf"
					type="application/pdf" width="80%" height="100%">
				</object>
			</div>);
	}


	buildProjectContainer(){
		const detail1 = "It's an web application. End users i.e. university professor's and student's."+
		" It lets professor's to create quizzes which in turn keeps students interested in the course."+
		" A student can take quizzes and score in the quiz. Both professor and student can watch videos,"+
		" search books.To check out the application visit http://cs5610-ankita7.rhcloud.com/#/";

		 const detail2 = "It's all about Big Data and to process Big Data. Map Reduce is provides a programming"+
		 " approach to process large datasets parallely and efficiently. In this project, my team implemented"+
		 " map reduce framework's building blocks. We processed large dataset using our implementation of the framework."+
		 " We compared the processing performance of our implementation environment against AWS environment."+
		 " Check out the project on github https://github.com/anuyaa/MR";
		const data = [
			{
				"summary" : "Whiteboard - An online quiz portal",
				"detail" : detail1
			},
			{
				'summary' : 'Map Reduce Framework',
				'detail' : detail2
			}
		];

		return (
			<div className="subcontainer">
				<h4>Couple of my academic projects</h4>
				<br/>
				{
					data.map((elem, index) =>
					<Accordian key={index} summary={elem.summary} detail={elem.detail} /> )
				}
				{this.buildlinks()}
			</div>);
	}

	buildlinks(){
		const links = [
			{
				"address" : "https://www.linkedin.com/in/ankita7",
				"text" : "LinkedIn"
			},
			{
				"address" : "https://github.com/anuyaa",
				"text" : "GitHub"
			}
		];

		return (
			links.map((elem, index) => <Hyperlinks key={index} address={elem.address} text={elem.text}/>)
		);
	}

	buildContactContent(){
		return (
			<div className="subcontainer">
				<div className="about-container">
					You can reach me at #908-655-1647 or write me at `ankitaa77777@gmail.com`
				</div>
			</div>);
	}

	render() {
		const show = this.props.show;
		return (
			<div className="main-container">
				{
					show == "about" ? this.buildAboutContent()
					: show == "resume" ? this.buildResumeContent()
					: show == "contact" ? this.buildContactContent(): this.buildProjectContainer()
				}
			</div>
		);
	}
}


Main.propTypes = {
	show : PropTypes.string.isRequired
};
