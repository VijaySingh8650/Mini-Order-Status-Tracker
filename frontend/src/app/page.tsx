"use client";

import { TypeResponseOfOrders } from "@/types/type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<TypeResponseOfOrders[]>([]);

  useEffect(()=>{
    getOrders();
  },[]);


  const getOrders = () => {

    setLoader(true);
    
    let url:string = `${process.env.NEXT_PUBLIC_BASE_URL}/orders`;
    
    fetch(url).then((res)=>res.json())
    .then((res)=>{
      if(res?.data && Array.isArray(res.data)){
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
      
    </div>
  )
}
