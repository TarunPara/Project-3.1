import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("user");

const API = axios.create({
  // baseURL: "http://localhost:5000/v1",
  baseURL: "https://project-3-1.onrender.com/v1",
  withCredentials: true,

  headers: { Authorization: `Bearer ${user?.tokens?.access?.token}` },
});
export default API;
