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
  const [noData, setNoData] = useState<boolean>(false);



  useEffect(()=>{

    getOrders(status);

  },[status]);


  const getOrders = (orderStatus:string) => {

    setLoader(true);
  
    
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/orders${orderStatus ? "?status="+orderStatus :""}`).then((res)=>res.json())
    .then((res)=>{
      if(res?.data && Array.isArray(res.data)){
  
        setOrderData(res.data);
        setLoader(false);

        res?.data?.length === 0 ? setNoData(true) : setNoData(false);

      }
    })
    .catch((err)=>{

       setError(true);
       setLoader(false);
       setNoData(false);
       console.error(err);
     
    })
  }

  const handleValueChange = (value:string) =>{
    setNoData(false);
    setOrderData([]);
    setStatus(value);
  }




  return (
    <div>
      <h1 className="text-center mt-4 mb-8 text-2xl font-bold">Mini-Order-Status-Tracker</h1>
      
      <div className="flex justify-center w-full">
        <div>
          <div className="mb-4 gap-4 flex items-center justify-end">
            
           {status && <button className="border-2 rounded-md border-black pt-2 pb-2 pl-4 pr-4" onClick={()=>handleValueChange("")}>Reset</button>}
            <SelectBox value={status} handleValueChange={handleValueChange}/>

          </div>

         <TableComponent data={orderData}/>

         {
          loader && <p className="text-center text-xl mt-2">Loading...</p>
         }
         {
           noData && <p className="text-center text-xl mt-2">{"Nothing Found :("}</p>
         }
         {
            error && <p className="text-center text-xl mt-2">Something went wrong!</p>
         }

        </div>


      </div>
    </div>
  )
}
