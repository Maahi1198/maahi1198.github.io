import React from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import '../CSS/NewBlogCSS.css'
class NewBlog extends React.Component{
    SubmitBlog(){
        //send it to Home(user)
    }
    render(){
        return(
            <>
            <textarea className='Textarea'></textarea>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" size='sm' style={{marginRight: '265px'}}>
                    Select Background
                </Dropdown.Toggle> <Button size='sm' onSubmit={this.SubmitBlog}>Create Blog</Button>
                <Dropdown.Menu>
                    <Dropdown.Item href=" ">Blue office table</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            </>
        )
    }
}
export default NewBlog;