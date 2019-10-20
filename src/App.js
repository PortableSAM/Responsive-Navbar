import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
