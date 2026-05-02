import { sendmail } from "../sendemails/emails.js"
import { taskqueue } from "./taskqueue.js"

console.log("🚨 Worker file has been loaded and is listening for jobs!");
taskqueue.process(async(job)=>{

    const{to,sub,html}=job.data
    if(!to || !sub || !html){
        throw new Error("no email field recived")
    }

    console.log("email processing")
    await sendmail(to,sub,html)
    console.log("email send")
})