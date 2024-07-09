import { dummyAxios } from "@src/lib/dummyAxios";
import { useQuery } from "@tanstack/react-query";

export const postsQuery = useQuery({
  queryFn: () => {
    dummyAxios.get("/posts");
  },
  queryKey: ["posts"],
});
