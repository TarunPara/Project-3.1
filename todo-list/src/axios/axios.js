import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("user");

const API = axios.create({
  baseURL: "http://localhost:5000/v1",
  headers: { Authorization: `Bearer ${user?.tokens?.access?.token}` },
});
export default API;
