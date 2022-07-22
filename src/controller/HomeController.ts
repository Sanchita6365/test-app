import { Request, Response } from "express";

export async function home(req:Request,res:Response){
        res.send('this is a simple application..');
}
