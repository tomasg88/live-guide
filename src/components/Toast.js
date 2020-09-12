import React from "react";
import { Slide, Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const getMessage = (type) =>
	type === "success" ? "Nuevo evento creado" : "Error al crear evento";

const SlideTransition = (props) => <Slide {...props} direction="up" />;

const Toast = ({ open, type, onClose }) => {
	return (
		<Snackbar
			key={new Date()}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={open}
			onClose={onClose}
			message={getMessage(type)}
			TransitionComponent={SlideTransition}
			action={
				<React.Fragment>
					<IconButton
						aria-label="close"
						color="inherit"
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				</React.Fragment>
			}
		/>
	);
};

export default Toast;
