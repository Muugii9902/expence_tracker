// import { SideBar } from "../../components/records/sidebar";
// import { RecordCard } from "../../components/records/record-card";
"use client";
import { useContext } from "react";
import { ArrowRight, ArrowLeft } from "../../../icons";
import { SideBar, RecordCard } from "../../components/records";
import { UserContext } from "../../context/user-context";
import { RecordContext } from "../../context/record-context";

const RecordPage = () => {
  const { user, transactions } = useContext(UserContext);

  console.log("transaction", transactions);
  return (
    <div className="max-w-[1600px] mx-auto py-8 flex gap-16">
      <SideBar />
      <section>
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <button className="btn btn-square bg-[#E5E7EB]">
              <ArrowRight />
            </button>
            <p>Last 30 Days</p>
            <button className="btn btn-square bg-[#E5E7EB]">
              <ArrowLeft />
            </button>
          </div>
        </div>
        <div>
          <h2 className="mb-3">Today</h2>
          <div className="flex flex-col gap-4">
            <RecordCard transactions={transactions} />
            <RecordCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecordPage;
