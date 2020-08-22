export const createLiveSvc = (model) => {};

export const getLives = async () => {
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	const res = fetch(`${process.env.REACT_APP_API}/live`, {
		...headers,
	});
	return res;
};
