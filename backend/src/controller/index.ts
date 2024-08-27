import {prisma} from "../prisma";
import express, { Request, Response } from "express";
import {startOfMonth, endOfMonth} from "date-fns";

export const getOrders = async(req: Request, res: Response) => {
  try {


    let requestQuery:any = {};

    if(req.query?.status){
        requestQuery.status = req.query.status as string;
    }

    if(req.query?.orderMonth && !isNaN(Number(req.query?.orderMonth))){

       requestQuery.createdAt = {

        gte: startOfMonth(new Date(2024, Number(req.query?.orderMonth))),
        lte: endOfMonth(new Date(2024, Number(req.query?.orderMonth))),

       }

    }



    const response = await prisma.orderStatus.findMany({

        where: Object.values(requestQuery)?.length > 0 ? requestQuery : undefined,
      
        select: {

            id: true,
            orderId: true,
            customerName: true,
            status: true,
            createdAt: true,

        },

    });



    res.status(200).send({data:response});

  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
