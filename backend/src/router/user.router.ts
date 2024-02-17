import { Router,Request,Response } from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../model/user.model";
const router = Router();

///////////////////////////////////////////////////////////////////////////////////////////
router.get("/",asyncHandler (async(_req:Request,res:Response)=>{
    try {
        const userData = await UserModel.find()
        if(userData){
            res.status(200).send({data:userData, message:"data fetch successfully"});
        }else{
            res.status(400).send({data:'',message:"data cannot fetch successfully"})
        }
    } catch (error) {
        res.status(500).send({data:"",message:"internal server down"});
    }
}))
///////////////////////////////////////////////////////////////////////////////////////////
router.post('/create', asyncHandler (async (req:Request,res:Response)=>{
    try {
        const {name, email, phone} =req.body
        await UserModel.create({name, email, phone}).then((data)=>{
            res.status(200).send({data:data,message:"data added successfully"})
        })

    } catch (error) {
        res.status(500).send({data:"",message:"internal server down"});
    }
}))
///////////////////////////////////////////////////////////////////////////////////////////
router.put('/update/:id', asyncHandler(async(req:Request,res:Response)=>{
    try {
        const {name,email,phone}=req.body
        await UserModel.findByIdAndUpdate({_id:req.params.id},{name, email, phone}).then((data)=>{
            res.status(200).send({data:data, message:"data updated successfully"})
        })
        
    } catch (error) {
        res.status(500).send({data:"",message:"internal server down"});
    }
}))

router.delete('/delete/:id', asyncHandler (async(req:Request,res:Response)=>{
    try {
        await UserModel.deleteOne({_id:req.params.id}).then((data)=>{
            if(data.deletedCount===1){
                res.status(200).send({data:data,message:"data deleted successfully"})
            }else{
                res.status(400).send({data:'',message:"data cannot deleted from our database please try again later"})
            }
            
        })
    } catch (error) {
        res.status(500).send({data:'',message:"internal server down"});
    }
}))
export default router;