import axios from "axios";
import { API_URL, init_URI, projects_URI } from "../constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function initGet() {
  return api.get(init_URI);
}

export function projectGet(id) {
  return api.get(projects_URI + id);
}
