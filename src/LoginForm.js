import React from "react"; 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'; 
// import Header from "./components/Header";
import styles from './index.module.css'; 
  
const LoginForm = ({ children }) => { 
    return ( 
        <div className={styles.layout}> 
            <Form> 
                <FormGroup> 
                    <Label for="exampleEmail"> 
                        Email 
                    </Label> 
                    <Input 
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Your email"
                        type="email"
                    /> 
                </FormGroup> 
                <FormGroup> 
                    <Label for="examplePassword"> 
                        Password 
                    </Label> 
                    <Input 
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your unique password"
                        type="password"
                    /> 
                </FormGroup> 
                <Button> 
                    Submit 
                </Button> 
            </Form> 
        </div> 
    ) 
} 
  
export default LoginForm;