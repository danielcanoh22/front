import { ContextProps, State } from '@/types';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { globalReducer } from './globalReducer';

const initialState: State = {
  markers: [],
  nearbyDrivers: {
    showCircle: false,
    coords: [],
    radius: 0,
  },
};

const GlobalContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };