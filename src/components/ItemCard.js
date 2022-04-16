import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ItemCard({ product, onClick }) {
	return (
		<Grid>
			<Card>
				<CardMedia
					component="img"
					sx={{ objectFit: "contain" }}
					alt={product.title}
					height="140"
					image={product.image}
				/>
				<CardContent>
					
						{product.name}
						{product.description}
					<Button onClick={onClick}>Add</Button>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Grid>
	);
}

export default ItemCard;
