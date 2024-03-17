import { isValidUsername } from "6pp"


export const usernameValidoter=(username)=>{
    if(!isValidUsername(username)){
        return { isValidate: false, errorMessage: "Username is invalid" }
    }
}
