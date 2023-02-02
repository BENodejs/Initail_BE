import { returnStatus,statusCode } from "../config/config-json"
import addschema from "../modules/add/schema"
import AddModel from "../modules/add/model"

export default class addServices{
    public async addn(data:AddModel){
        try{
            console.log("POST: /api/user/add")
            
            const result= await addschema.create(data)
            console.log(result,"post");
                
            if(result){
            return {status:returnStatus.success,data:result}
            }else{
                return {status:returnStatus.failure,data:result}
            }
        } catch {
            console.log("logger error");
            
        }
    }
}