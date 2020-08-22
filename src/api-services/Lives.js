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

export const createLive = async (body) => {
	var miInit = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	};
	const res = fetch(`${process.env.REACT_APP_API}/live`, miInit);
	return res;
};
