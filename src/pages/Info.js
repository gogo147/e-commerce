import React, { useState, useEffect } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import axios from "axios";
import authState from "../stores/access/atom";

function Dashboard() {
	const [auth, setAuth] = useRecoilState(authState);
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
	});

	useEffect(() => {
		setUser({
			...auth.user,
			name: { ...auth.user.name },
			address: { ...auth.user.address },
		});
	}, [auth]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.patch("https://k4backend.osuka.dev/users/" + auth.user.id, user)
			.then((response) => {
				setAuth({ ...auth, user: response.data });
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

				<Button type="submit">Update</Button>
			</Grid>
		</>
	);
}

export default Dashboard;
