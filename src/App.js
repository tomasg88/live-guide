import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NewLiveForm from "./components/NewLive";

function App() {
	return (
		<div className="App-header">
			<Header />
			<NewLiveForm />
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
