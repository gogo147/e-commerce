import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import authState from "../stores/access/atom";
import HandleCart from "../hooks/HandleCart";

const createLink = (text, path) => {
	return { text, path };
};

const settings = [
	createLink("Profile", "/profile"),
	createLink("Dashboard", "/dashboard"),
	createLink("Presentation", "/presentation"),
];

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const auth = useRecoilValue(authState);
	const resetAuth = useResetRecoilState(authState);
	const navigate = useNavigate();
	const cart = HandleCart();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleSignInOut = () => {
		if (auth.token) resetAuth();
		navigate("/login");
	};
	const cartQty = cart.getTotalQty();

	const pages = [
		createLink("Products", "/products"),
		createLink(`Cart${cartQty === 0 ? "" : ` (${cartQty})`}`, "/cart"),
	];

	const navLinks = pages.map((page) => (
		<MenuItem
			key={page.text}
			component={NavLink}
			to={page.path}
			onClick={handleCloseNavMenu}
		>
			{page.text}
		</MenuItem>
	));
	const userLinks = settings.map((setting) => (
		<></>
	));
	return (
		<AppBar position="static">
			<div>
				<Toolbar>
						King
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>	
						</IconButton>
						{navLinks}
					</Box>
						{navLinks}
							<div onClick={handleOpenUserMenu} sx={{ p: 0 }}></div>
							{auth.token ? userLinks : ""}
							<div onClick={() => {handleSignInOut(); handleCloseUserMenu(); }}>
								{auth.token ? "Logout" : "Login"}
							</div>
				</Toolbar>
			</div>
		</AppBar>
	);
};
export default Header;