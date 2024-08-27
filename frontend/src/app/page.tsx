"use client";
import React, { useEffect, useState } from "react";

import TableComponent from "@/components/table";
import { TypeResponseOfOrders } from "@/types/type";

export default function Home() {

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<TypeResponseOfOrders[]>([]);

  useEffect(()=>{
    getOrders();
  },[]);


  const getOrders = () => {

    setLoader(true);
    
    let url:string = `${process.env.NEXT_PUBLIC_API_BASE_URL as string}/orders`;
    
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/orders`).then((res)=>res.json())
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
  return (
    <div>
      <h1 className="text-center m-4 text-blue-900">Hello</h1>
      <TableComponent data={orderData}/>
    </div>
  )
}
