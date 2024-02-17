import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import { dbConnect } from "./conf/conf";
import user_router from "./router/user.router"

dotenv.config();
dbConnect()
const port = process.env.PORT || 3000;

const app = express();
app.use(cors(
  {
    origin:"http://localhost:5173"
  }
));
app.use(express.json())

app.use('/api/user',user_router)

app.listen(port,()=>{
  console.log(`server running on port ${port}`);
  
})