import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component{

	constructor(){
		super();
	}

	handleChange(e){
		const value = e.target.value;
		this.props.changeName(value);
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Brand</a>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><a href="#">Home</a></li>
								<li><a href="#about">Stay</a></li>
								<li><a href="#contact" data-toggle="collapse" data-target=".navbar-collapse.in">Close</a></li>
								<li><a href="#contact" data-toggle="collapse" data-target=".navbar-collapse.in">Close</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}