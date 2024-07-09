import { TPost } from "@src/@types/general";
import { dummyAxios } from "@src/lib/dummyAxios";

export async function fetchPosts(): Promise<TPost[]> {
  const response = await dummyAxios.get("/posts");
  return response.data.posts;
}

export async function fetchSinglePost(
  postId?: string | number
): Promise<TPost | undefined> {
  if (postId == null) return;

  const response = await dummyAxios.get(`/posts/${postId}`);

  return response.data;
}
