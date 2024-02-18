import { ConnectOptions,connect } from "mongoose";

export const dbConnect = () => {
    try {
        console.log(process.env.mongoURI);
        
        connect(process.env.mongoURI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions).then(() => {
            console.log("connected");
        });
    } catch (error) { 
        console.log("error", error); 
    }
};