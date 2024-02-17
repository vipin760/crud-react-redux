import { Schema, model } from "mongoose";
import { IUser } from "../share/interface/user.interface";

const userSchema = new Schema<IUser>({
    name:{type:String,required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true}
})

const UserModel = model<IUser>("User",userSchema);
export default UserModel;