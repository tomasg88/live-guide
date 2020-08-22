import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, makeStyles, Fade } from "@material-ui/core";
import LiveCard from "./LiveCard";
import { getLives } from "../api-services/Lives";

const useStyles = makeStyles((theme) => ({
	root: {
		// width: "100%",
	},
}));

const LiveTable = (props) => {
	const classes = useStyles();
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const doFetch = async () => {
			getLives()
				.then((response) => response.json())
				.then((data) => {
					setLoading(false);
					setList(data);
					console.log("doFetch -> data", data);
				});
		};

		doFetch();
	}, []);

	return (
		<div className={classes.root}>
			{loading ? (
				<CircularProgress />
			) : (
				<Grid
					container
					alignItems="center"
					justify="flex-start"
					spacing={4}
				>
					{list.length > 0 &&
						list.map((l, i) => (
							<Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
								<Fade
									in={true}
									timeout={500 * i + 1}
									key={l.id}
								>
									<LiveCard live={l} />
								</Fade>
							</Grid>
						))}
				</Grid>
			)}
		</div>
	);
};

export default LiveTable;
