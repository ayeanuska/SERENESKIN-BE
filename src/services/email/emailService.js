
import { userActivationUrlEmailTemplate } from "./emailTemplate.js"
import { emailTransporter } from "./transport.js"


export const userActivationUrlEmail= async(obj)=>{    
     // get the transporter 
     // get template 
     const info = await emailTransporter.sendMail(userActivationUrlEmailTemplate (obj))
        console.log( info.messageId);
}  