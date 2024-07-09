import { TPost } from "@src/@types/general";
import { UseQueryResult } from "@tanstack/react-query";
import { createContext } from "react";

interface GlobalContextProps {
  postsQuery: UseQueryResult<TPost[] | TPost, Error> | undefined;
}

export const GlobalContext = createContext<GlobalContextProps>({
  postsQuery: undefined,
});
