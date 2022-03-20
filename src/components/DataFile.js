import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ContextData = createContext();
function DataFile({ children }) {
  const [fetchData, setFetchData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <ContextData.Provider value={{ data :fetchData }}>
      {children}
    </ContextData.Provider>
  );
}

export default DataFile;
