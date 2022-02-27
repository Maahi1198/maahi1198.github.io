import React from 'react';
import {Button,Form} from 'react-bootstrap';
import { useForm } from '../Hooks/useForm';
export const Login=() =>{
    const[values,handleChange] = useForm({ email: '', password:''});
    return(
<Form>
                   <Form.Group className="mb-3" controlId="email" onChange={handleChange} value={values.email} required>
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email"  />
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="password" onChange={handleChange} value={values.password} required >
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password"  />
                   </Form.Group>

                    <Button variant="primary" type="submit" onClick={e=>this.onSubmit(e)} >
                       Login
                   </Button>
               </Form>
    )
}
//export default (Login);