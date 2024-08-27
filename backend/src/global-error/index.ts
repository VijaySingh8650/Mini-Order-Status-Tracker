import { ErrorRequestHandler, NextFunction, Response, Request } from "express";


export const InvalidAPI = (req: Request, res: Response)=>{
    res.status(400).json({error: "Invalid API endpoint."});
};

export const ErrorHandler = (error:ErrorRequestHandler, req: Request, res: Response) =>{
    res.status(500).json({error: "Something went wrong."});
};
