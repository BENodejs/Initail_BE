import { Application } from "express";
import addRoutes from "../controller/add/addRoutes";


export class AppRoutes{

    public AddRoutes(app:Application): void{
        app.use('/api/user', addRoutes)
    }
    
}