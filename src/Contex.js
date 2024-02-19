import { createContext, useContext, useState } from 'react';

const GContext = createContext();

export const useGContext = () => useContext(GContext);

const GlobalContext = (props) => {
  const [name, setName] = useState('');

  return (
    <GContext.Provider value={{ name, setName }}>
      {props.children}
    </GContext.Provider>
  );
};

export default GlobalContext;
