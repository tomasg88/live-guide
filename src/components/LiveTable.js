import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Fade } from "@material-ui/core";
import LiveCard from "./LiveCard";
import { getLives } from "../api-services/Lives";

const LiveTable = (props) => {
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
				})
				.catch((err) => {
					console.log("doFetch -> err", err);
					setLoading(false);
				});
		};

		doFetch();
	}, []);

	return (
		<div>
			<Grid container alignItems="center" justify="center" spacing={3}>
				{loading ? (
					<CircularProgress color={"secondary"} />
				) : (
					list.length > 0 &&
					list.map((l, i) => (
						<Fade in={true} timeout={500 * i + 1} key={l.id}>
							<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
								<LiveCard live={l} />
							</Grid>
						</Fade>
					))
				)}
			</Grid>
		</div>
	);
};

export default LiveTable;
