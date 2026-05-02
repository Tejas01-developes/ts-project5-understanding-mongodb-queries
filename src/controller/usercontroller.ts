import { Request, RequestHandler, Response } from "express";
import { bodytype1, bodytype2, bodytype3, bodytype4 } from "../types/bodytypes.js";
import { insertservice, insertusersmarks, updateage, updateemaill } from "../service/userservice.js";
import bcrypt from 'bcrypt';
import { taskqueue } from "../bgw/taskqueue.js";
import { welcometemplate } from "../templet/welcomemailtemp.js";
import collection1 from "../userschema/schema.js";
import { collection2 } from "../userschema/usersmarksschema.js";


export const insertuser=async(req:Request<{},{},bodytype1>,resp:Response):Promise<void>=>{
const{name,email,password}=req.body
if(!name || !email || !password){
resp.status(400).json({message:"fields are not filled"})
return
}
try{
    const userid=crypto.randomUUID();
    const hash=await bcrypt.hash(password,10)
await insertservice({userid,name,email,password:hash})
const tempemail=welcometemplate({name,userid})

await taskqueue.add({
    to:email,
    sub:"welcome to our service",
    html:tempemail.html
})
// await sendmail(
//     email,
//  "welcome to our service",
//     tempemail.html
// )
resp.status(200).json({message:"user inserted succesfully"})
return

}catch(err){
    resp.status(400).json({message:"insertion failed"})
    return
}
}



export const insertusermaeks:RequestHandler<{},{},bodytype4>=async(req,resp)=>{
const {email,marks}=req.body
if(!email || !marks){
    return resp.status(400).json({success:false,message:"no body recived"})
}
try{
    await insertusersmarks({email,marks})
    return resp.status(200).json({success:true,message:"inserted users marks"})
}catch(err){
    return resp.status(400).json({success:false,message:"insert users marks failed"})
}
}



export const updateuser:RequestHandler<{},{},bodytype2>=async(req,resp)=>{
const{email,updateemail}=req.body;
if (!email || !updateemail){
    return resp.status(400).json({success:false,message:"body not recived"})
}
try{
    await updateemaill({email,updateemail})
    return resp.status(200).json({message:"update succesfully done"})
}catch(err){
    console.log(err)
    throw new Error("updation failed")
}
}


export const updateuserage:RequestHandler<{},{},bodytype3>=async(req,resp)=>{
    const{email,age}=req.body;
    if (!email || !age){
        return resp.status(400).json({success:false,message:"body not recived"})
    }
    try{
        await updateage({email,age})
        return resp.status(200).json({message:"update succesfully done"})
    }catch(err){
        console.log(err)
        throw new Error("updation failed")
    }
    }


    export const updatemarksarray:RequestHandler<>=async(req,resp)=>{
        try{
          const res= await collection2.updateOne({email:"t@gmail.com"},{$push:{marks:{"subject":"hindi","marks":70}}})
          console.log(res);
          return resp.status(200).json({message:"update succesfull"})
        }catch(err){
            console.log(err)
            throw new Error("updation failed")
        }
        }





    // export const getuser=async(req:Request,resp:Response)=>{
    //     try{
    //    const res= await collection1.find({email:{$nin:["t@gmail.com","j@gmail.com"]}})

    //   resp.status(200).json({success:true,message:res})
    //   return
    //     }catch(err){
    //         throw new Error("get users failed")
    //     }
    // }

    // export const getuser=async(req:Request,resp:Response)=>{
    //     try{
    //    const res= await collection1.find({$and:[{age:21},{email:"t@gmail.com"}]})

    //   resp.status(200).json({success:true,message:res})
    //   return
    //     }catch(err){
    //         throw new Error("get users failed")
    //     }
    // }



    
    export const getuser=async(req:Request,resp:Response)=>{
        try{
    //    const res= await collection2.find({"marks.subject":"maths",
    //                                       "marks.marks":76
    //    })
    const res= await collection2.find({"marks.marks":{$all:[80,40,60]}})

      resp.status(200).json({success:true,message:res})
      return
        }catch(err){
            throw new Error("get users failed")
        }
    }