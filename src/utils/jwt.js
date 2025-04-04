import jwt from 'jsonwebtoken'
import { CreateNewSession } from '../model/session/SessionModel'
// generate accessJWT
export const createAccessJWt = async (payload)=>{

//create token

    const token =jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"20min"})
    //store in session table / db.

    const obj = {
        token,
        expiresIn: new Date(Date.now() + 20 * 60 * 1000),//20 min
    
    }


    const newSession = await CreateNewSession(obj);
    return newSession?._id ? token : null;
}

//decode accessJWT



//generate refreshJWT
//decode refreshJWT