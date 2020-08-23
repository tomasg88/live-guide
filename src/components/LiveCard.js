import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ListItemText, List, ListItem, ListItemIcon } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles({
	root: {
		position: "relative",
		height: 350,
		overflow: "auto",
	},
	media: {
		height: 140,
	},
	listIconWidth: {
		minWidth: 40,
	},
	cardActions: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
});

const LiveCard = ({ live }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={4}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="https://material-ui.com/static/images/cards/paella.jpg"
					title={live.title}
				/>
				{/* <CardContent> */}
				<Typography gutterBottom variant="h5" component="h2" noWrap>
					{live.title}
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon classes={{ root: classes.listIconWidth }}>
							<DescriptionOutlinedIcon />
						</ListItemIcon>
						<ListItemText>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{live.description}
							</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon classes={{ root: classes.listIconWidth }}>
							<EventIcon />
						</ListItemIcon>
						<ListItemText>
							<Typography
								variant="subtitle2"
								color="primary"
								component="p"
							>
								{live.date}
							</Typography>
						</ListItemText>
					</ListItem>
				</List>
				{/* </CardContent> */}
			</CardActionArea>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					variant="contained"
					color="primary"
					disabled={!live.link}
				>
					Ir
				</Button>
			</CardActions>
		</Card>
	);
};

export default LiveCard;
