import { createContext, useContext, useState } from 'react';

const GlobalC = createContext();

export const useGlobalC = () => useContext(GlobalC);

const Global = (props) => {
  const [log, setLog] = useState('ww');

  return (
    <GlobalC.Provider value={{ log, setLog }}>
      {props.children}
    </GlobalC.Provider>
  );
};
export default Global;
