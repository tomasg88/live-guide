export const createLiveSvc = (model) => {};

export const getLives = async () => {
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	const res = fetch("http://localhost:1337/live", {
		...headers,
	});
	return res;
};
