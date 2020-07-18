import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "moment/locale/es";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

moment.locale("es");

ReactDOM.render(
	// <React.StrictMode>
	<BrowserRouter>
		<MuiPickersUtilsProvider utils={MomentUtils} locale={"es"}>
			<App />
		</MuiPickersUtilsProvider>
	</BrowserRouter>,
	// </React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
