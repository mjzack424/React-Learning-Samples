//src\context\useStore.js:
//Custom hook to use the StoreContext

import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export function useStore() {
    return useContext(StoreContext);
}