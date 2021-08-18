import React, { createContext, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  return (
    <div>
      <DataContext.provider value={{}}>{children}</DataContext.provider>
    </div>
  );
};

export default DataContext;
