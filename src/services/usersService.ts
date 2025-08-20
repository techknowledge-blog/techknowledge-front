import { api } from "./api";

export async function getUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function getUserByUsername(username: string) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}
