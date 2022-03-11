import React, { useState } from "react";
import styles from "./UserForms.module.css"

const UserForm = (props) => {
    const [firstName, setFirstName]  = useState("");
    const [firstNameError, setFirstNameError] = useState("")

    const [lastName, setLastName]  = useState("");
    const [lastNameError, setLastNameError] = useState("")

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setFirstNameError("First name must be at least 2 characters")
        } else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters")
        } else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 charactors")
        } else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setPasswordError("Password must match")
        } else {
            setPasswordError("")
        }
    }

    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange= {handleFirstName} className={styles.margin}/>
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:
                        <p></p>                           
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange= {handleLastName} className={styles.margin}/>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>
                        : null                        
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange= {handleEmail} className={styles.margin}/>
                    {
                        emailError ?
                        <p>{emailError}</p>
                        : null                        
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange= {(e)=>setPassword(e.target.value)} className={styles.margin}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange= {handlePassword}/>
                    {
                        passwordError?
                        <p>{passwordError}</p>:
                        null
                    }
                </div>            
            </form>            
        </div>
        
    )
    
};

export default UserForm;