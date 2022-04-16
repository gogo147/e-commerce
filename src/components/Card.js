import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Card({ product, onClick }) {
	return (
		<Grid  align="center" >
				<CardMedia
					component="img"
					sx={{ objectFit: "contain" }}
					alt={product.title}
					height="140"
					image={product.image}
				/>
				{product.name}
				{product.category}
			<Button onClick={onClick}>Add</Button>
		</Grid>
	);
}

export default Card;