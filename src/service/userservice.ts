import { controllertype1, controllertype2, controllertype3, controllertype4 } from "../types/controllertypes.js";
import collection1 from "../userschema/schema.js";
import { collection2 } from "../userschema/usersmarksschema.js";


export const insertservice=async(data:controllertype1):Promise<string>=>{
    try{
await collection1.create({userid:data.userid,name:data.name,email:data.email,password:data.password})
return "insert user success"
}catch(err){
    throw new Error("insertion failed")
}
}


export const insertusersmarks=async(data:controllertype4):Promise<string>=>{
    try{
await collection2.create({email:data.email,marks:data.marks})
return "insert user success"
}catch(err){
    throw new Error("insertion failed")
}
}




export const updateemaill=async(data:controllertype2)=>{
try{
    await collection1.updateOne({email:data.email},{$set:{email:data.updateemail}})
}catch(err){
    console.log(err)
    throw new Error("updation failed")
}
}


export const updateage=async(data:controllertype3)=>{
    try{
      const res= await collection1.updateOne({email:data.email},{$set:{age:data.age}})
      console.log(res);
    }catch(err){
        console.log(err)
        throw new Error("updation failed")
    }
    }


    

    

