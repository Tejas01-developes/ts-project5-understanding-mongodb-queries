import nodemailer from 'nodemailer';

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL as string,
        pass:process.env.PASS as string
    }
})


export const sendmail=async(to:string,subject:string,html:string)=>{
    try{
await transport.sendMail({
    from:process.env.EMAIL as string,
    to,
    subject,
    html
})
    }catch(err){
        console.log(err);
        throw new Error("email sending failed")
    }
}