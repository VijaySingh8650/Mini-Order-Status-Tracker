"use client";
import React, { useEffect, useState } from "react";

import TableComponent from "@/components/table";
import { TypeResponseOfOrders } from "@/types/type";
import SelectBox from "@/components/select-box";

export default function Home() {

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<TypeResponseOfOrders[]>([]);
  const [status, setStatus] = useState<string>("");



  useEffect(()=>{

    getOrders(status);

  },[status]);


  const getOrders = (orderStatus:string) => {

    setLoader(true);
  
    
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/orders${orderStatus ? "?status="+orderStatus :""}`).then((res)=>res.json())
    .then((res)=>{
      if(res?.data && Array.isArray(res.data)){
        console.log(res.data, "sgufdud")
        setOrderData(res.data);
        setLoader(false);
      }
    })
    .catch((err)=>{

       setError(true);
       setLoader(false);
       console.error(err);
     
    })
  }

  const handleValueChange = (value:string) =>{
    setOrderData([]);
    setStatus(value);
  }


  return (
    <div>
      <h1 className="text-center mt-4 mb-8 text-2xl font-bold">Mini-Order-Status-Tracker</h1>
      
      <div className="flex justify-center w-full">
        <div>
          <div className="mb-4 flex justify-end">

            <SelectBox handleValueChange={handleValueChange}/>

          </div>

         <TableComponent data={orderData}/>

         {
          loader && <p className="text-center text-xl mt-2">Loading...</p>
         }

        </div>


      </div>
    </div>
  )
}
