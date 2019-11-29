import React, { createContext, useState, useReducer, useContext } from "react";

export const Store = createContext();

// prev is the state stored in a context
// newState がuseStoreを使うコンポーネントから渡されるもの
function reducer(prev, newState) {
  const _newState = typeof newState === "function" ? newState(prev) : newState;
  return { ...prev, ..._newState };
}
export function Provider({ children, initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
}

export function useStore() {
  return useContext(Store);
}
