import React from "react";
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	makeStyles,
	Paper,
} from "@material-ui/core";
import Moment from "react-moment";
import withData from "../hoc/withData";

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
		width: "70vw",
	},
}));

const LiveTable = ({ rows }) => {
	const classes = useStyles();
	return (
		<TableContainer component={Paper} className={classes.table}>
			<Table
				stickyHeader
				className={classes.table}
				size="small"
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell align="center">Fecha</TableCell>
						<TableCell align="center">Título</TableCell>
						<TableCell align="center">Desc</TableCell>
						<TableCell align="center">Cuenta</TableCell>
						<TableCell align="center">Plataforma</TableCell>
						<TableCell align="center">Link</TableCell>
						<TableCell align="center">Gratis</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="center">
								{/* <Moment locale="es" format="DDD MMMM YYYY"> */}
								{row.date}
								{/* </Moment> */}
							</TableCell>
							<TableCell component="th" scope="row">
								{row.title}
							</TableCell>
							<TableCell align="center">
								{row.description}
							</TableCell>
							<TableCell align="center">{row.account}</TableCell>
							<TableCell align="center">{row.platform}</TableCell>
							<TableCell align="center">
								{row.url || "hola"}
							</TableCell>
							<TableCell align="center">{row.isFree}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default withData(LiveTable);
