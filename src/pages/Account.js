import TableCell from "@mui/material/TableCell";
import authState from "../stores/auth/atom";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useRecoilValue } from "recoil";

function Account() {
	const { user } = useRecoilValue(authState);

	return (
		<>
			{user.role === "admin" && (
				<Link component={RouterLink} to="/adminpanel">
					Admin
				</Link>
			)}
			<TableCell>Username:</TableCell>
			<TableCell>{user.username}</TableCell>
		
			<TableCell>Password:</TableCell>
			<TableCell>{user.password}</TableCell>
		
			<TableCell>Name:</TableCell>
			<TableCell>{user.name.firstname}</TableCell>
		</>
	);
}

export default Account;