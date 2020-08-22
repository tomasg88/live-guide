import React, { useState, useEffect, useCallback } from "react";
import {
	TextField,
	FormControlLabel,
	Checkbox,
	Paper,
	Grid,
	Typography,
	makeStyles,
	InputLabel,
	MenuItem,
	Select,
	Button,
} from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { moment } from "moment";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 650,
		width: "70vw",
		padding: theme.spacing(2),
		marginTop: theme.spacing(8),
	},
}));

const getBodyObj = (t, d, date, a, p, l, f) => ({
	title: t,
	description: d,
	date: date,
	account: a,
	platform: p,
	link: l,
	isFree: f,
});

const NewLiveForm = ({ hideForm }) => {
	const classes = useStyles();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState(new Date());
	const [account, setAccount] = useState("");
	const [platform, setPlatform] = useState("");
	const [link, setLink] = useState("");
	const [isFree, setIsFree] = useState(false);

	const handleDateChange = (momentObject) => {
		const parsedDate = momentObject.format();
		console.log(parsedDate);
		setDate(parsedDate);
	};

	useCallback(() => {
		setLink(`${platform} - ${account}`);
	}, [platform, account]);

	const handleSubmit = () => {
		// POST /live
		const body = getBodyObj(
			title,
			description,
			date,
			account,
			platform,
			link,
			isFree
		);
		console.log("handleSubmit -> body", body);
		var miInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};

		fetch("http://localhost:1337/live", miInit)
			.then((res) => res.json())
			.catch((error) => console.error("Error:", error))
			.then((response) => {
				console.log("Success:", response);
				hideForm();
			});
	};

	return (
		<Paper elevation={3} className={classes.root}>
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Nueva transmisión
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
						<TextField
							required
							id="title"
							name="title"
							label="Título"
							fullWidth
							autoComplete="given-name"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<TextField
							required
							id="description"
							name="description"
							label="Descripción"
							fullWidth
							autoComplete="shipping address-line1"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						/>
					</Grid>
					<Grid item xs={12}>
						<DateTimePicker
							ampm={false}
							value={date}
							onChange={handleDateChange}
							label="Cuando es?"
							animateYearScrolling
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="account"
							name="account"
							label="Cuenta"
							fullWidth
							autoComplete="account"
							onChange={(e) => setAccount(e.target.value)}
							value={account}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel id="platform">Plataforma</InputLabel>
						<Select
							labelId="platform"
							id="platform-combo"
							value={platform}
							onChange={(e) => setPlatform(e.target.value)}
						>
							<MenuItem value={""}>
								<em>Seleccione</em>
							</MenuItem>
							<MenuItem value={"facebook"}>Facebook</MenuItem>
							<MenuItem value={"instagram"}>Instagram</MenuItem>
							<MenuItem value={"youtube"}>Youtube</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="link"
							label={"Link a la transmisión"}
							defaultValue={link}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									color="secondary"
									name="saveAddress"
									checked={isFree}
									onChange={(e) =>
										setIsFree(e.target.checked)
									}
								/>
							}
							label="Transmisión gratuita?"
						/>
					</Grid>
				</Grid>
				<Grid container justify="flex-end">
					<Button variant="text" color="primary">
						CANCELAR
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						ENVIAR
					</Button>
				</Grid>
			</React.Fragment>
		</Paper>
	);
};

export default NewLiveForm;