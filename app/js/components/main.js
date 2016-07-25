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
					I am a Computer Science graduate from Northeastern University.
					I got an opportunity to work with Schneider Electric as a coop
					where I grasped a new framework Rich Client Platform and contributed extensively
					towards the design and enhancement of the existing RCP application named EcoStream.
					Additionally, I have worked as a web developer where I delivered web modules based
					on WAMP application server platform. I have also acquired proficiency in Hadoop Map
					Reduce Framework and several Data Mining Techniques via courses of my interest.
					Through my college and work experience, I have developed a strong background and
					interest in software application development as well as web applications development.
					I have worked in major computer languages both academically and professionally
					and out of which I am most comfortable working in Java, NodeJS, JavaScript, MEAN.
					<br/><br/>
					Following are the technical skills which I acquired during my education and professional
					work experience:
					<br/>
					Programming Languages: JAVA, JavaScript, NodeJS, AngularJS, SQL, C, Python, CSS, SQL, JQuery, XML, Bootstrap, Ajax
					Databases and Tools:   MySQL, NoSQL (MongoDB), Eclipse, Netbeans, Visual Studio, WEKA
					Platform/Framework/OS: MEAN, Map Reduce, WAMP,  Git VCS, Windows, Linux/Unix
					<br/><br/>
					On a personal note, my hobbies are travelling, hiking, listening music, reading books.
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
		const dummy = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen";
		const data = [
			{
				"summary" : 'Lorem ipsum title',
				"detail" : dummy
			},
			{
				'summary' : 'Lorem ipsum title',
				'detail' : dummy
			}
		];

		return (
			<div className="subcontainer">
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
					You can reach me at #908-655-1647 or write me at ankitaa77777@gmail.com
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
