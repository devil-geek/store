import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div>
		      <nav className="navbar is-white has-shadow"  aria-label="main navigation">
				  <div className="navbar-brand">
				    <a className="navbar-item" >
				      <img src="https://image.flaticon.com/icons/svg/511/511139.svg" width="50" height="30"/>
				      Store
				    </a>
				  </div>
				</nav>
		    </div>
		);
	}
}
