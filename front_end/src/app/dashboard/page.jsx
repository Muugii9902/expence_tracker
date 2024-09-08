"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import Card from "../components/dashboard/card";
import Cart from "../components/dashboard/cart";
import LastRecord from "../components/dashboard/lastrecords";
import Chart from "../components/dashboard/chatrs";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import MonthChart from "../components/dashboard/montchart";

const Cardinfo = [
  {
    color: "text-[#84CC16]",
    sumAmount: "1,400,000₮",
    incomeAmount: "Your Income Amount",
    arrow: <FaCircleArrowUp className="text-lime-500" />,
    change: "32% from last month",
  },
  {
    color: "text-[#0166FF]",
    sumAmount: "1,400,000₮",
    incomeAmount: "Your Expence Amount",
    arrow: <FaCircleArrowDown className="text-[#0166FF]" />,
    change: "32% from last month",
  },
];

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${uid}`);
      console.log("guilgee", res.data.records);
      setTransactions(res.data.records);
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

  // useEffect(() => {
  //   fetchTransactions();
  // }, [user]);

  return (
    <div className="w-[100%] h-full m-auto bg-slate-200">
      <div className="flex  justify-between px-10 py-10">
        <Cart />
        {Cardinfo.map((a) => (
          <Card
            color={a.color}
            sumAmount={a.sumAmount}
            incomeAmount={a.incomeAmount}
            arrow={a.arrow}
            change={a.change}
          />
        ))}

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
      <div className="w-[88%] m-auto  py-10">
        <div className=" w-[100%] h-[400px]  border rounded-lg bg-white flex justify-between">
          <MonthChart />
          <Chart />
        </div>
        <div className="justify-center py-10">
          {transactions.map((tr) => (
            <div>{tr.name}</div>
          ))}
        </div>
      </div>
      <div className=" px-10">
        <LastRecord />
      </div>
    </div>
  );
};

export default Dashboard;
