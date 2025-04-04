import jwt from 'jsonwebtoken'
import { CreateNewSession } from '../model/session/SessionModel'
// generate accessJWT
export const createAccessJWt = async (email)=>{

//create token

    const token =jwt.sign({email}, process.env.JWT_SECRET, {expiresIn:"20min"})
    //store in session table / db.

    const obj = {
        token,
        association: email,
        expiresIn: new Date(Date.now() + 20 * 60 * 1000),//20 min
    
    }


    const newSession = await CreateNewSession(obj);
    return newSession?._id ? token : null;
}

//decode accessJWT



//generate refreshJWT
export const creteRefreshJwt = async (email)=>{
    // create token 
    const token = jwt.sign({email}, process.env.REFRESH_JWT_SECRET, {expiresIn:"30days"})

    // storing in user table 
   const user = await updateUser({email}, {refreshJWT})
   return user?._id refreshJWT : null;
}

//decode refreshJWT