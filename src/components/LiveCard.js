import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	media: {
		height: 140,
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
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" noWrap>
						{live.title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{live.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{live?.url !== "" && (
					<Button size="small" color="primary">
						Ir
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default LiveCard;