"use client";
import { createContext, useState, useEffect } from "react";

import axios from "axios";
import { apiUrl } from "../../utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [Catecories, setCategories] = useState([null]);
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    profile_img: "",
  });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
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

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("guilgee", res.data.records);
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    fetchTransactions();
    getCategories();
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, fetchUserData, transactions, Catecories }}
    >
      {children}
    </UserContext.Provider>
  );
};
