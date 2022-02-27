import { useState } from "react";
//import { inputCheck } from "./inputCheck";

export const useForm = (initial,inputCheck)=>{
    const [values, setValues] = useState(initial);
    const [errors, setErrors] = useState({});
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(inputCheck(values));
    };
    return[
        values,
        e =>{
            if (e.target.controlId === 'isAdmin') {
                const value = e.target.checked === undefined? e.target.value : e.target.checked;
                setValues({
                    ...values,
                    [e.target.controlId]:value
                })
            } else {
                setValues({
                    ...values,
                    [e.target.controlID]:e.target.value
                });
            }
       
        },handleSubmit,errors,
    ];
};
export default useForm;