import React, { useState } from "react";
import "./App.css";
import LiveTable from "./components/LiveTable";
import NewLiveForm from "./components/NewLive";

function App() {
	const [showNewLiveForm, setShowNewLiveForm] = useState(false);

	return (
		<div className="App-header">
			{showNewLiveForm && (
				<NewLiveForm hideForm={() => setShowNewLiveForm(false)} />
			)}
			<LiveTable />
		</div>
	);
}

export default App;
