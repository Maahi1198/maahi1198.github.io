import React from 'react';
import {Button,Form} from 'react-bootstrap';
import { useForm} from '../Hooks/useForm';
import { inputCheck } from '../Hooks/inputCheck';

export const Register=() =>{
     const[values,handleChange,errors, handleSubmit] = useForm({username:'', email: '', password:'', confirmpwd:'', isAdmin:false}, inputCheck);
     return(
 <Form onSubmit={handleSubmit}>
                   <Form.Group className="mb-3" 
                        controlId="username" 
                        onChange={handleChange} 
                        value={values.username } >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter any Username" />
                        {errors.username? <div>{errors.username}</div>:values.username}
                    </Form.Group>
                    <Form.Group className="mb-3" 
                        controlId="email" 
                        onChange={handleChange} 
                        value={values.email} required>
                    {errors.email? errors.email:values.email}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  />
                    </Form.Group>

                    <Form.Group className="mb-3" 
                        controlId="password" 
                        onChange={handleChange}
                        value={values.password} 
                        required >
                        {errors.password? errors.password:values.password}
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" 
                        controlId="confirmpwd" 
                        onChange={handleChange} 
                        value={values.confirmpwd}  
                        required>
                        {errors.confirmpwd? errors.confirmpwd:values.confirmpwd}
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" 
                        controlId="isAdmin" 
                        onChange={handleChange} 
                        values={values.isAdmin}>
                        <Form.Check type="checkbox" label="Admin?" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={e=>this.onSubmit(e)} >
                        Register
                    </Button>
                </Form>
     )
 }
 //export default (Register);