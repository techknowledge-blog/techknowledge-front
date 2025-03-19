import { api } from "./api";

export async function getPosts() {
  const response = await api.get("/posts/published");
  return response.data;
}

export async function getPostBySlug(slug: string) {
  console.log("Slug: ", slug);

  const response = await api.get(`/posts/${slug}`);

  console.log("Response Data:", response.data);

  return response.data;
}
