import React from "react";
import Grid from "@mui/material/Grid";
import HandleCart from "../hooks/HandleCart";
import productsState from "../stores/products/atom";
import Card from "../components/Card";
import { useRecoilValue } from "recoil";

function Products() {
	const item = useRecoilValue(productsState);
	const shopping = HandleCart();

	return (
		<>
			<Grid
				container
				spacing={2}
				justifyItems="center"
				justifyContent="center"
			>
				{item.map((product) => {
					return (
						<Card
							key={product.id}
							product={product}
							onClick={() => shopping.addItem(product.id)}
						/>
					);
				})}
			</Grid>
		</>
	);
}

export default Products;
