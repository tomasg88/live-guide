import React from "react";
import "./App.css";
import Header from "./Header/Header";
import IndexPage from "./pages/IndexPage";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App-header">
			<Header />

			<Switch>
				<Route path="/" exact component={IndexPage} />
			</Switch>
		</div>
	);
}

export default App;
