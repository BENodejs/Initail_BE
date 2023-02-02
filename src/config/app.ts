import bodyparser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import { AppRoutes } from "../routes/routes"
import {NextFunction} from 'express'
import {Request, Response} from 'express'

class App{
    public mongourl:string="mongodb+srv://Dharun:Mongodb.com@dharunonenet.xml3dcx.mongodb.net/test" 
    public app= express ()
    private routesprev= new AppRoutes()

constructor(){
    this.config()
    this.app=express()
    this.mongosetup()
}
public config() : void {
    this.app.use(bodyparser.urlencoded({extended:true}))
    this.app.use(bodyparser.json())
    this.app.use(
        (error: any, req: Request, res: Response, next: NextFunction) => {
            console.log('error', error)
        })
    this.routesprev.AddRoutes(this.app)
}

private mongosetup() :void {
    mongoose
        .connect(this.mongourl)
        .then(()=>(console.log("DB Connected")))
        .catch(()=>(console.log("DB not connected")))
}
}
export default new App().app