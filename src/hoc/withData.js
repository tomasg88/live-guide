import React from "react";

const data = require("../data");

const withData = (WrappedComponent) => {
	return () => <WrappedComponent rows={data.default} />;
};

export default withData;
