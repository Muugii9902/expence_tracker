"use client";

import { createContext, useEffect, useState } from "react";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [Categories, setCategories] = useState([null]);

  const getCategories = async () => {
    console.log("cat name ========>");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("category", response.data);
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log("CAT-NAME", error);
      toast.error("Failed to fetch category names");
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <RecordContext.Provider value={{ Categories }}>
      {children}
    </RecordContext.Provider>
  );
};
