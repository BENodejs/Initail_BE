import addController from "./addController";
import {Router} from "express"
import type { ErrorRequestHandler } from "express";
import AddController from "./addController";
console.log();


class AddRoutes{
    
    private addcont:addController= new addController()
    public router=Router()
    constructor(){
        this.init()
        this.router=Router()
    }
    init(){
        {
        this.router.post('/add', this.addcont.addDetails)
        // this.router.post('/create',this.addcont.addDetails)
    }}
}

const addinit= new AddRoutes()
addinit.init()
export default addinit.router