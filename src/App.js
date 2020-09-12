import React, { useState } from "react";
import "./App.css";
import LiveTable from "./components/LiveTable";
import NewLiveForm from "./components/NewLive";
import { Fab, makeStyles, Container } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Toast from "./components/Toast";

const useStyles = makeStyles((theme) => ({
	liveContainer: {
		margin: "50px auto",
	},
	fabButton: {
		position: "fixed",
		bottom: 15,
		right: 15,
		backgroundColor: theme.palette.secondary.main,
	},
}));

function App() {
	const classes = useStyles();
	const [showNewLiveForm, setShowNewLiveForm] = useState(false);
	const [toast, setToast] = useState({
		open: false,
		type: "success",
		onClose: () => setToast({ open: false }),
	});

	const handleToast = (type) => {
		setToast((prevState) => ({
			...prevState,
			type: type,
			open: true,
		}));
	};

	return (
		<div className="App-header">
			<Container maxWidth="lg" className={classes.liveContainer}>
				<LiveTable />
			</Container>

			{/* componets below are absolute */}
			<NewLiveForm
				isOpen={showNewLiveForm}
				hideForm={() => setShowNewLiveForm(false)}
				showToast={handleToast}
			/>
			<Fab
				className={classes.fabButton}
				size="medium"
				onClick={() => setShowNewLiveForm(true)}
			>
				<AddIcon style={{ color: "#fff" }} size={30} />
			</Fab>
			<Toast {...toast} />
		</div>
	);
}

export default App;
