import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Body extends React.Component {

	render(){
		return (
			<div>
				<div className="container">
					<div className="text-center">
						<div className="round-button">
							<div className="round-button-circle">
								<a href="http://example.com" className="round-button">
									Discover a Movie
								</a>
							</div>
						</div>
						<div className="round-button">
							<div className="round-button-circle">
								<a href="http://example.com" className="round-button">
									Discover a Movie
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}