import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <Context.Provider value={{ isClosed, setIsClosed }}>
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
