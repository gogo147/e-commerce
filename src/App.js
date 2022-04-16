import React from "react";
import {
	Admin,
	Cart,
	Info,
	Login,
	ProductInfo,
	Products,
	Account,
	Signup,
} from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authState from "./stores/access/atom";
import { useRecoilValue } from "recoil";
import CssBaseline from "@mui/material/CssBaseline";
import Style from "./components/Style";

function App() {
	const auth = useRecoilValue(authState);

	return (
		<>
			<BrowserRouter>
				<CssBaseline />
				<Routes>
					<Route element={<Style />}>
						<Route path="/" element={<Products />} />
						<Route path="/products" element={<Products />} />
						<Route
							path="/products/:productId"
							element={<ProductInfo />}
						/>
						<Route path="/cart" element={<Cart />} />

						{auth.token ? (
							<>
								<Route path="/account" element={<Account />} />
								<Route
									path="/info"
									element={<Info />}
								/>
							</>
						) : (
							<>
								<Route path="/login" element={<Login />} />
								<Route
									path="/signup"
									element={<Signup />}
								/>
							</>
						)}
						{auth.user.role === "admin" && (
							<Route
								path="/admin"
								element={<Admin />}
							/>
						)}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
