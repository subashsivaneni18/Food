"use client";
import getItemByType from "@/app/actions/getItemByType";
import ItemCard from "@/app/components/ItemCard";
import Navbar from "@/app/components/Navbar";
import { item } from "@prisma/client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const page = () => {
  
  return (
    <div>
      <Navbar />
      <div className="relative top-[70px] ">
        <div className="w-[90vw]  mx-auto relative top-10">
          <p className="text-3xl font-bold text-white">Orders</p>
          <div className="overflow-y-auto">
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
