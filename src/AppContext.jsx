// src/AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [shoeProgress, setShoeProgress] = useState([]);

  const updateShoeProgress = (newData) => {
    setShoeProgress(newData);
  };

  return (
    <AppContext.Provider value={{ shoeProgress, updateShoeProgress }}>
      {children}
    </AppContext.Provider>
  );
};
