import React from "react";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const LastRecord = ({ transactions }) => {
  return (
    <div className=" bg-white rounded-xl">
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-black">Last Records</th>
            </tr>
          </thead>
          {transactions?.map((tr) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                    {" "}
                    <GoHomeFill className="text-white w-5 h-5" />
                  </div>
                </th>
                <td>
                  <p className="text-xl">
                    <div>{tr.name}</div>
                  </p>
                  <p className="text-gray-400">{tr.updatedat}</p>
                </td>

                <td className="text-green-500">{tr.amount}$</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LastRecord;
