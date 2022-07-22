import { Request, Response } from "express";
import Web3 from "web3";
let web3 = new Web3("https://ds2.exx.network/");
export async function getBalance(req:Request,res:Response){
    //res.send('0xff3Cea704f5F2579f0022b5E89a153303149722A');

    // let balance = await web3.eth.getBalance("0xff3Cea704f5F2579f0022b5E89a153303149722A");
    // console.log(balance);

    try {
      let address = req.body.address  
    let balance = await web3.eth.getBalance(address);
    let eth = web3.utils.fromWei(balance)


    console.log(balance);
    res.send({
        "account address": address,
         "available balance": eth 
    })

    } catch (error) {
        res.send({
            error
        })
    }
    
}
