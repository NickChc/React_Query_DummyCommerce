import { TUser } from "@src/@types/general";
import { dummyAxios } from "@src/lib/dummyAxios";

export async function fetchUser(
  userId?: string | number
): Promise<TUser | undefined> {
  if (userId == null) return;

  const response = await dummyAxios.get(`/users/${userId}`);

  return response.data;
}
