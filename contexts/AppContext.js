import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <AppContext.Provider value={{ counter, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
