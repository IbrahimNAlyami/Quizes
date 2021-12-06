import React from 'react';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer';
import { Route } from 'react-router-dom';

import React, { Component } from 'react'

export default class App extends Component {
	constructor(Header, Main, Footer)

	render() {
		return (
			<div>
			<Header />
			<Main />
			<Footer />	
			</div>
		)
	}
}


export default App;
