import React ,{useState} from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import { auth } from "../firebase";

const Login=()=>{
    const [userName ,setUserName]=useState("")
    const [password ,setPassword]=useState("") 
    const navigate = useNavigate();
    const handleLogin=()=>{
        try {
            signInWithEmailAndPassword(auth,userName,password).then(res=>{
                console.log("signInWithEmailAndPassword:",res)
                navigate("/")
            }).catch(err=>{
                console.log(err);
            })
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return(
        <div className="signup-container">
        <Typography variant="h4" className="signup-heading">
            Login User
        </Typography>
        <Grid container spacing={3} justify="center" className="signup-form" >
            <Grid item xs={12} sm={9} className="signup-form-field">
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="filled"
                    fullWidth
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value)
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={9} className="signup-form-field">
                <TextField id="outlined-basic" value={password} type="password" label="Password" variant="filled" fullWidth onChange={(event) => {
                    setPassword(event.target.value)
                }} />
            </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" className="signup-form" >
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Grid>
        </div>
    )
}
export default Login;