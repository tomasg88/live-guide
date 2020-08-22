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
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

moment.locale("es");

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#97afe0",
		},
	},
});

ReactDOM.render(
	// <React.StrictMode>
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<MuiPickersUtilsProvider utils={MomentUtils} locale={"es"}>
				<App />
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	</BrowserRouter>,
	// </React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
