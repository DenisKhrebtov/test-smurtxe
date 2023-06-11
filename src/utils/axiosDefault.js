import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://test-smurtxe-back-production.up.railway.app/api/",
});
