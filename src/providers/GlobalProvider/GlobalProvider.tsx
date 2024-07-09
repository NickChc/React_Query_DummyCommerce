import { PropsWithChildren } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@src/api/posts/posts";

export function GlobalProvider({ children }: PropsWithChildren) {
  const postsQuery = useQuery({
    queryFn: () => fetchPosts(),
    queryKey: ["posts"],
  });

  return (
    <GlobalContext.Provider
      value={{
        postsQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
