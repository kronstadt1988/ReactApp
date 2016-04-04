import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header-components/header.jsx';
import Body from './body-components/body.jsx';
import Footer from './footer-components/footer.jsx';

import { Router, Route, Link, browserHistory } from 'react-router'

export default class Layout extends React.Component{

	constructor(){
		super();
		this.state = {
			name : "Hola"
		}
	}

	changeName(name){
		this.setState({name : name})
	}

	render(){
		return(
			<div>
				<Header/>
				<Body/>
			</div>

		)
	}
}