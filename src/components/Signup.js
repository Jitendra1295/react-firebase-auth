import React ,{useState} from "react";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { auth } from "../firebase";
import {useNavigate} from "react-router-dom"
const Signup=()=>{
    const [userName ,setUserName]=useState("")
    const [email ,setEmail]=useState("") 
    const [password ,setPassword]=useState("")
    const navigate = useNavigate();
    const handleSubmitData = async () => {
        try {
            createUserWithEmailAndPassword(auth,email,password).then(async(res)=>{
                console.log(res)
                const user=res.user;
                await updateProfile(user,{
                    displayName:userName
                });
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
            Signup User
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
                <TextField id="outlined-basic" value={email}  label="Email" variant="filled" fullWidth onChange={(event) => {
                    setEmail(event.target.value)
                }} />
            </Grid>
            <Grid item xs={12} sm={9} className="signup-form-field">
                <TextField id="outlined-basic" value={password} type="password" label="Password" variant="filled" fullWidth onChange={(event) => {
                    setPassword(event.target.value)
                }} />
            </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" className="signup-form" >
            <Button variant="contained" color="primary" onClick={handleSubmitData} >Signup</Button>
        </Grid>
        </div>
    )
}
export default Signup;