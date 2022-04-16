import { atom } from "recoil";

const accesState = atom({
	key: "accesState",
	default: {
		token: null,
		user: { role: null },
	},
});

export default accesState;
