"use client";

import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import axios from "axios";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [Categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        console.log("category", res.data.categories);
        setCategories(res.data.categories);
        // console.log("categoryyyyyyy", res.data.Categories);
        toast.success("category names");
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
