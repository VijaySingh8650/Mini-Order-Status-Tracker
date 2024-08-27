"use client";

import { TypeResponseOfOrders } from "@/types/type";
import React from "react";

type TypePageProps = {
  data: TypeResponseOfOrders[];
};



const TableComponent: React.FC<TypePageProps> = ({ data }) => {

 console.log(data);

  return (
    <div className="flex justify-center w-full">

     <table>
      <thead className= "bg-black text-white">
     

          <th className="font-normal pl-4 pr-16 pt-2 pb-2">S.No.</th>
          <th className="font-normal text-left pr-32 pt-2 pb-2">Order ID</th>
          <th className="font-normal text-left pr-32 pt-2 pb-2">Customer Name</th>
          <th className="font-normal text-left pr-32 pt-2 pb-2">Status</th>
          <th className="font-normal text-left pr-32 pt-2 pb-2">Created At</th>

      </thead>

      <tbody>
        {
          data?.length > 0 && data?.map((item:TypeResponseOfOrders, index:number)=>{
                 return <tr key={item.id} className="border-b">
                  <td className="text-left pl-4">{index+1}</td>
                  <td className="p-2">{item.orderId}</td>
                  <td className="p-2">{item.customerName}</td>
                  <td className="p-2">{item.status}</td>
                  {/* <td>{item.createdAt}</td> */}
                 </tr>
          })
        }
      </tbody>
     </table>

    </div>
  );
};

export default TableComponent;
