import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const NoDataMessage = ({ message }) => {
	return (
		<Paper elevation={2}>
			<Grid
				container
				justify="center"
				alignItems="center"
				spacing={3}
				style={{ padding: 15 }}
			>
				<Grid item xl={12}>
					<Typography variant="h4">{message}</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default NoDataMessage;
