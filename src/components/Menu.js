import React from "react";
import { Link } from "react-router-dom";
import {
	Drawer,
	makeStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { ROUTES as routes } from "../config/routes";

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	noDecoration: {
		color: "inherit",
		textDecoration: "none",
	},
}));

const Sidebar = ({ closeMenu, isOpen }) => {
	const classes = useStyles();

	return (
		<Drawer anchor={"left"} open={isOpen} onClose={closeMenu}>
			<List className={classes.list}>
				{routes.map((r) => (
					<Link
						to={r.path}
						className={classes.noDecoration}
						key={r.path}
						onClick={closeMenu}
					>
						<ListItem button alignItems="center">
							<ListItemIcon>{r.icon}</ListItemIcon>
							<ListItemText primary={r.title} />
						</ListItem>
					</Link>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
