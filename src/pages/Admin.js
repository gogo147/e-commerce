import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import productsState from "../stores/items/atom";
import usersState from "../stores/account/atom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Admin() {
	const products = useRecoilValue(productsState);
	const customer = useRecoilValue(usersState);
	const [search, setSearch] = useState("");
	const [itemSearch, setItemSearch] = useState("");
	return (
		<>
			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						Products
					</AccordionSummary>

					<div
						required
						id="outlined-required"
						label="Search"
						value={itemSearch}
						onChange={(e) => setItemSearch(e.target.value)}
					/>
					{products
						.filter((product) =>
							product.title
								.toLowerCase()
								.includes(itemSearch.toLowerCase())
						)
						.map((product) => (
							<AccordionDetails key={product.id}>
								{product.title}
							</AccordionDetails>
						))}
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						Users
					</AccordionSummary>
					<div
						required
						id="outlined-required"
						label="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					{customer
						.filter((user) =>
							user.username
								.toLowerCase()
								.includes(search.toLowerCase())
						)
						.map((user) => (
							<AccordionDetails key={user.id}>
								{user.username}
							</AccordionDetails>
						))}
				</Accordion>
			</div>
		</>
	);
}

export default Admin;
