import { TComment } from "@src/@types/general";
import { dummyAxios } from "@src/lib/dummyAxios";

export async function fetchComments(
  postId?: string | number
): Promise<TComment[] | undefined> {
  if (postId == null) return;

  const response = await dummyAxios.get(`/comments/post/${postId}`);

  return response.data.comments;
}
