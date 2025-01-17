import axios from "axios";
import { BASE_URL_JSONPLACEHOLDER_API } from "../environments/env";

export const jsonPlaceholderAPI = axios.create({
  baseURL: BASE_URL_JSONPLACEHOLDER_API,
  timeout: 10000,
});
