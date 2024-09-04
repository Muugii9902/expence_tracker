"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import Card from "../components/dashboard/card";
import Cart from "../components/dashboard/cart";
import LastRecord from "../components/dashboard/lastrecords";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      setTransactionData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransactions();
    }
  }, [user.id]);

  return (
    <div className="w-[1200px] h-full m-auto">
      <div className="flex gap-10  ">
        <Cart />
        <Card />
        <Card />

        {/* {transactionData?.transactions?.map((transaction, index) => {
          return (
            <div key={index} className="flex">
              <img src="/income.svg" alt="income" />
              <div>
                <p className="mb-1">{transaction?.name}</p>
                <p className="text-[#6B7280]">{transaction?.createdat}</p>
              </div>
            </div>
          );
        })} */}
      </div>
      <div className=" py-10">
        <LastRecord />
      </div>
    </div>
  );
};

export default Dashboard;
