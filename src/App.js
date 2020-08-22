import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import LiveTable from "./components/LiveTable";
import NewLiveForm from "./components/NewLive";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
	fabButton: {
		position: "absolute",
		bottom: 15,
		right: 15,
		backgroundColor: theme.palette.secondary.main,
	},
}));

function App() {
	const classes = useStyles();
	const [showNewLiveForm, setShowNewLiveForm] = useState(false);

	return (
		<div className="App-header">
			<LiveTable />

			{/* componets below are absolute */}
			<NewLiveForm
				isOpen={showNewLiveForm}
				hideForm={() => setShowNewLiveForm(false)}
			/>
			<Fab
				className={classes.fabButton}
				size="medium"
				onClick={() => setShowNewLiveForm(true)}
			>
				<AddIcon style={{ color: "#fff" }} size={30} />
			</Fab>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
			/>
		</div>
	);
}

export default App;
