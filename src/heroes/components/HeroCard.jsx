import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export const HeroCard = ({ id, name, biography, images }) => {
	return (
		<Card sx={{ width: 300, margin: "1rem" }} xs={4}>
			<CardMedia component="img" height="400" image={images.sm} alt={name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body1">{biography.firstAppearance}</Typography>
				<Link href={`/hero/${id}`} underline="none">
					More info...
				</Link>
			</CardContent>
		</Card>
	);
};
