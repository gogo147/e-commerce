import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Box";
import authState from "../stores/access/atom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setAuth = useSetRecoilState(authState);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://k4backend.osuka.dev/auth/login", {
				username: username,
				password: password,
			})
			.then((response) => {
				axios
					.get(
						`https://k4backend.osuka.dev/users/${response.data.userId}`
					)
					.then((userData) => {
						setAuth({
							user: userData.data,
							token: response.data.token,
						});
						navigate("/profile");
					});
			});
	};
	return (
		<>
			<Grid onSubmit={handleSubmit}>
				<Grid item>
					<TextField
						required
						id="outlined-required"
						label="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item>
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>
				<Button type="submit">Log In</Button>
			</Grid>
				Not a user ? <Link to="/signup">Sign Up!</Link>
		</>
	);
}

export default Login;