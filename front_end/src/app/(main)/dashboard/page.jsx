"use client";

import { useContext, useEffect, useState } from "react";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

import axios from "axios";

import { toast } from "react-toastify";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import LastRecord from "../../components/dashboard/lastrecords";

import MonthChart from "../../components/dashboard/montchart";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnurChart from "../../components/dashboard/Doughnut";
import { UserContext } from "../../context/user-context";
import { apiUrl } from "../../../utils/util";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [cartinfo, setCartinfo] = useState(null);
  const [Chartinfo, setChartinfo] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

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

  const getInfoCartdata = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("st", res.data);
      setCartinfo(res.data);
    } catch (error) {
      toast.error("Cardinfo failed");
    }
  };

  const getChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      setChartinfo(res.data);
      console.log("chartdataaa", res.data);
      setDonutChartData(res.data.donut);
      console.log("donuttttt", res.data.donut);
      setBarChartData(res.data.bar);
      console.log("baaar", res.data.bar);
    } catch (error) {
      toast.error("chartdata failed");
    }
  };

  // useEffect(() => {
  //   if (user && user.id) {
  //     fetchTransactions();
  //   }
  // }, [user.id]);

  useEffect(() => {
    getInfoCartdata();
    fetchTransactions();
    getChartData();
  }, [user]);

  return (
    <div className="w-[100%] h-full m-auto bg-slate-200">
      <div className="container grid grid-cols-3 gap-10 m-auto py-10">
        <div className="relative w-full shadow-xl card bg-base-100">
          {/* <img src="/images/Large.png" alt="Shoes" /> */}
          <div className="absolute items-end justify-end text-lg text-black card-body bottom-1 ">
            <h3 className="">CASH</h3>
            <p>11,250,657.89</p>
          </div>
        </div>
        <div className="w-full p-0 shadow-xl card bg-base-100">
          <div className="flex flex-col gap-5 card-body ">
            <div className="flex items-center border-b-2 ">
              <TbPointFilled color="green" />
              <h2 className="card-title ">Your Income </h2>
            </div>
            <h1 className="text-3xl font-semibold">{cartinfo?.income.sum}</h1>
            <span className="opacity-50">Your Income Account</span>
            <div className="flex items-end ">
              <FaArrowAltCircleUp color="green" size={20} className="mr-2" />
              <span>32&#37; from last month</span>
            </div>
          </div>
        </div>
        {/* INC */}
        {/* EXP */}
        <div className="w-full shadow-xl card bg-base-100 ">
          <div className="flex flex-col gap-5 card-body ">
            <div className="flex items-center border-b-2">
              <TbPointFilled color="blue" />
              <h2 className="mb-2 card-title ">Total expenses </h2>
            </div>
            <h1 className="text-3xl font-semibold">{cartinfo?.expense.sum}</h1>
            <span className="opacity-50">Your Income Account</span>
            <div className="flex items-end ">
              <FaArrowAltCircleDown color="green" size={20} className="mr-2" />
              <span>32&#37; from last month</span>
            </div>
          </div>
        </div>
      </div>
      {/* {/chars/} */}
      <div className="w-[88%] m-auto  py-10">
        <div className=" w-[100%] h-[400px]  border rounded-lg bg-white flex justify-between">
          <MonthChart data={barChartData} />
          <DoughnurChart data={donutChartData} />
        </div>
      </div>
      <div className=" px-10">
        <LastRecord transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
