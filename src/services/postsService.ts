import { api } from "./api";

export async function getPosts() {
  const response = await api.get("/posts/published");
  return response.data;
}

export async function getPostBySlug(slug: string) {
  const response = await api.get(`/posts/${slug}`);
  return response.data;
}
