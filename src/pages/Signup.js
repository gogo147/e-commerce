import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authState from "../stores/auth/atom";

function Signup() {
	const setAuth = useSetRecoilState(authState);
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
		name: "",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://k4backend.osuka.dev/users", user)
			.then((response) => {
				axios
					.post("https://k4backend.osuka.dev/auth/login", {
						username: response.data.username,
						password: response.data.password,
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
			});
	};
	return (
		<>
			<Grid onSubmit={handleSubmit}>
				<Grid item>
					<TextField
						required
						label="Email"
						type="email"
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, email: e.target.value })
						}
					/>
				</Grid>
				<Grid>
					<TextField
						required
						label="Username"
						value={user.username}
						onChange={(e) =>
							setUser({ ...user, username: e.target.value })
						}
					/>
				</Grid>
				<Grid>
					<TextField
						required
						label="Password"
						type="password"
						value={user.password}
						onChange={(e) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
				</Grid>
				<Button type="submit">Sign up</Button>
			</Grid>
		</>
	);
}

export default Signup;
