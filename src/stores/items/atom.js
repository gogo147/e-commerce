import axios from "axios";
import { atom } from "recoil";

const itemState = atom({
  key: "itemState",
  default: [],
  effects: [
    ({ setSelf }) => {
      axios
        .get("https://k4backend.osuka.dev/products")
        .then((res) => setSelf(res.data))
        .catch((err) => console.log(err));
    },
  ],
});

export default itemState;
