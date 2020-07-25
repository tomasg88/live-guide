import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NewLivePage from "./components/pages/NewLivePage";
import Sidebar from "./components/Menu";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="App-header">
			<Header openMenu={() => setMenuOpen(true)} />
			<Sidebar isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/new" exact component={NewLivePage} />
			</Switch>
		</div>
	);
}

export default App;
