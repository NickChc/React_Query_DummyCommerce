import { GlobalContext } from "@src/providers/GlobalProvider";
import { useContext } from "react";

export function useGlobalProvider() {
  const { ...data } = useContext(GlobalContext);

  return { ...data };
}
