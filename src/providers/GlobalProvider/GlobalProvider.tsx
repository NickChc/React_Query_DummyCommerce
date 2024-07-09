import { PropsWithChildren } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export function GlobalProvider({ children }: PropsWithChildren) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
