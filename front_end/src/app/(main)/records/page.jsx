"use client";

import React, { useState } from "react";
import Modal from "../../components/records/modal";
const RecordPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-200 pt-8">
      <div className="w-[88%] px-10 flex gap-6">
        <div className="bg-slate-50 rounded-2xl py-5 px-5 artboard phone-4">
          <div>
            <h1 className="text-2xl font-bold">Records</h1>
            <div className="flex justify-center py-5">
              <button
                className="btn btn-active w-[250px] h-[32px] btn-primary"
                onClick={openModal}
              >
                +ADD
              </button>
            </div>
            <div className="flex justify-center py-5">
              <input
                type="text"
                placeholder="Search"
                className="grow w-[250px] h-[32px]"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Types</h1>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default RecordPage;
