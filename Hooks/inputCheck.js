// import { useState } from "react";
export const inputCheck= data =>{
    let errors = {}
    if(!data.controlID.trim()){
        errors.controlID = `${data.controlID} is required`;
    }
    if(!data.email.includes('@')){
        errors.email = "Email is invalid"
    }
    if(data.password.length>=8 && data.password.length<=16){
        errors.password = "Password does not meet requirements";
    }
    if(data.confirmpwd !== data.password){
        errors.confirmpwd = "Passwords do not match"
    }
    return errors;
// const[value,setValues]= useState(data);

// return[
//     value,
//     e=>{
//         if(value.password.length>=8 && value.password.length<=16)
//         {
//             setValues({
//                 ...value,
//                 [e.target.controlID]:e.target.value
//             });
//         }
//         else if(!value.email.includes('@')){
            
//         }
//         else{
//             <div style={{fontSize:10, color:'red'}}>Password Does not meet requirements</div>
//         }
//     }

// ]
};
export default inputCheck;