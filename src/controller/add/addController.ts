import {Response,Request} from "express"
import addServices from "../../services/addServices"
import AddModel from "../../modules/add/model"
import { statusCode } from "../../config/config-json"
export default class AddController{
    public async addDetails(req:Request, res:Response){
        try{
            let addu=new addServices()
            let user=new AddModel()
            user=req.body
             const results=await addu.addn(user)
             console.log(results)
             
             if(results?.status === statusCode.success){
                res.status(statusCode.success).json({
                    message:"Data Created",
                    data:results.data
                })
            }  else {
                res.status(statusCode.badRequest).json({
                    message:"Data Not Created",
                    data:results?.data
                })
            }
             }
         catch(err:any){
            console.log("something went wrong");           
        }
    }
}
