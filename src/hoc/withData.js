import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import NoDataMessage from "../components/NoDataMessage";

const withData = (WrappedComponent) => {
	return () => {
		const [loading, setLoading] = useState(true);
		const [data, setData] = useState(null);
		useEffect(() => {
			const headers = {
				"Content-Type": "application/json",
				Accept: "application/json",
			};

			fetch("http://localhost:1337/live", {
				...headers,
			})
				.then((response) => response.json())
				.then((data) => {
					setLoading(false);
					setData(data);
					console.log("withData -> data", data);
				});
		}, []);
		return (
			<>
				{loading ? (
					<CircularProgress />
				) : !data || !data.length ? (
					<NoDataMessage message="sin datos" />
				) : (
					<WrappedComponent rows={data} />
				)}
			</>
		);
	};
};

export default withData;
