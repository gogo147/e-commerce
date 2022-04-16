import axios from "axios";
import { atom } from "recoil";

const accontState = atom({
	key: "accontState",
	default: [],
	effects: [
		({ setSelf }) => {
			axios
				.get("https://k4backend.osuka.dev/users")
				.then((res) => setSelf(res.data))
				.catch((err) => console.log(err));
		},
	],
});

export default accontState;
