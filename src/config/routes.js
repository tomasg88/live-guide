import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ScheduleIcon from "@material-ui/icons/Schedule";

export const ROUTES = [
	{
		title: "Ver guía",
		path: "/",
		icon: <ScheduleIcon />,
	},
	{
		title: "Nuevo Live",
		path: "/new",
		icon: <AddIcon />,
	},
];
