import Header from "./Header";
import { Outlet } from "react-router-dom";

function Style() {
	return (
		<div className="layout">
			<Header />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}

export default Style;
