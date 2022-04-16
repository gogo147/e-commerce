import React from "react";
import productsState from "../stores/items/atom";
import HandleCart from "../hooks/HandleCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRecoilValue } from "recoil";
import { Grid} from "@mui/material";

function Cart() {
	const products = useRecoilValue(productsState);
	const cart = HandleCart();

	function getTotal() {
		return cart.items.reduce((acc, curr) => {
			const product = products.find((p) => p.id === curr.id);
			return acc + product.price * curr.qty;
		}, 0);
	}

	function getProduct(ci) {
		const product = products.find((p) => p.id === ci.id);
		const quantity = ci.qty;

		return (
			<div key={ci.id}>
					<Grid
						item
						container
						key={product.id}
						direction="row"
						justifyItems="center"
						border={1}
						alignItems="center"
						width="100%"
					>
				
					<img
						src={product.image}
						alt={product.title}
						style={{
							height: "100px",
							width: "100px",
							objectFit: "contain",
							objectPosition: "center",
							display: "block",
						}}/>
					{product.title}
					{product.price}$
					<div onClick={() => cart.setItemQty(ci.id, ci.qty - 1)}>
						<RemoveIcon />
					</div>
						{quantity}
					<div onClick={() => cart.setItemQty(ci.id, ci.qty + 1)}>
						<AddIcon />
					</div>
					<div onClick={() => cart.setItemQty(ci.id, 0)}>
						<DeleteIcon />
					</div>
				</Grid>
			</div>
		);
	}

	return (
		<>
			<h1>Cart</h1>
			{cart.items.map(getProduct)}
			Total: {getTotal().toFixed(2)}	
		</>
	);
}

export default Cart;
