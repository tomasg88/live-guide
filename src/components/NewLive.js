import React, { useState, useEffect } from "react";
import {
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Slide,
} from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { moment } from "moment";
import { createLive } from "../api-services/Lives";

const CustomTransition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const giveMePlatformPrefix = (platform) => {
	const prefixes = {
		youtube: "www.youtube.com/u/",
		facebook: "fb.com/",
		instagram: "@",
	};
	return prefixes[platform];
};

const getSuggestedTime = () => {
	const suggested = new Date();
	suggested.setHours(suggested.getHours() + 1);
	suggested.setMinutes(0);
	suggested.setSeconds(0);
	return suggested;
};

const NewLiveForm = ({ isOpen, hideForm }) => {
	const [liveModel, setLiveModel] = useState({
		title: "",
		description: "",
		date: getSuggestedTime(),
		account: "",
		platform: "",
		link: "",
		isFree: true,
	});

	// Link is calculated by platform and account
	useEffect(() => {
		if (liveModel.platform || liveModel.account) {
			setLiveModel((prevState) => ({
				...prevState,
				link: `${giveMePlatformPrefix(liveModel.platform)}${
					liveModel.account
				}`,
			}));
		}
	}, [liveModel.platform, liveModel.account]);

	const handleDateChange = (momentObject) => {
		const parsedDate = momentObject.format();
		setLiveModel((prevState) => ({
			...prevState,
			date: parsedDate,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLiveModel((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		const doFetch = async (model) => {
			createLive(liveModel)
				.then((res) => res.json())
				.then((response) => {
					console.log("Success:", response);
					hideForm();
				})
				.catch((error) => console.error("Error:", error));
		};

		doFetch(liveModel);
	};

	return (
		<Dialog
			open={isOpen}
			aria-labelledby="form-dialog-title"
			TransitionComponent={CustomTransition}
		>
			<DialogTitle id="form-dialog-title">Nueva transmisión</DialogTitle>
			<DialogContent>
				<DialogContentText>Ingresa la informacion</DialogContentText>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
						<TextField
							required
							id="title"
							name="title"
							label="Título"
							fullWidth
							autoComplete="given-name"
							onChange={handleChange}
							value={liveModel.title}
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
							onChange={handleChange}
							value={liveModel.description}
						/>
					</Grid>
					<Grid item xs={12}>
						<DateTimePicker
							ampm={false}
							value={liveModel.date}
							onChange={handleDateChange}
							label="Cuando es?"
							animateYearScrolling
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel id="platform">Plataforma</InputLabel>
						<Select
							labelId="platform"
							id="platform-combo"
							value={liveModel.platform}
							name={"platform"}
							onChange={handleChange}
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
							required
							id="account"
							name="account"
							label="Cuenta"
							fullWidth
							autoComplete="account"
							onChange={handleChange}
							value={liveModel.account}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="link"
							label={"Link a la transmisión"}
							value={liveModel.link}
							name={"link"}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									color="secondary"
									checked={liveModel.isFree}
									onChange={(ev, checked) =>
										handleChange({
											...ev,
											target: {
												...ev.target,
												name: "isFree",
												value: checked,
											},
										})
									}
								/>
							}
							label="La transmisión es gratuita?"
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button variant="text" color="primary" onClick={hideForm}>
					CANCELAR
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSubmit}
				>
					ENVIAR
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default NewLiveForm;
