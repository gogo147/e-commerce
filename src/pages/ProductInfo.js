import React from "react";
import HandleCart from "../hooks/HandleCart";
import productsState from "../stores/items/atom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ItemCard from "../components/ItemCard";

function ProductInfo() {
	const { productId } = useParams();
	const cart = HandleCart();
	const products = useRecoilValue(productsState);
	const product = products.find(
		(product) => product.id.toString() === productId
	);

	return (
		<>
			<div>
				{!product ? (
					"Error"
				) : (
					<ItemCard
						key={product.id}
						product={product}
						onClick={() => cart.addItem(product.id)}
					/>
				)}
			</div>
		</>
	);
}

export default ProductInfo;
