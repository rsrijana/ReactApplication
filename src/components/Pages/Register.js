import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Firebase from '../Firebase';
import "../Pages/Register";


export const Register = () => {

    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const [pswRepeat, setpswRepeat] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        const firestore = Firebase.firestore()
            firestore.collection("registration").add({
                email: email,
                psw: psw,
                pswRepeat: pswRepeat,
            }).then(function (response) {
                alert("registered successfully");
            }).catch(function (error){
                alert("failed to register..!")
            });
    }
    return(
        <div>
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <div className="container_register">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p><br/>
                    <hr/>
                        <label htmlFor="email"><b>Email</b></label> <br/>
                        <input type="text" placeholder="Enter Email" autoComplete="off" value={email} onChange={(e)=>setemail(e.target.value)} name="email" id="email" required /><br/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" autoComplete="off" value={psw} onChange={(e)=>setpsw(e.target.value)} name="psw" id="psw" required />

                        <label htmlFor="pswRepeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" autoComplete="off" value={pswRepeat} onChange={(e)=>setpswRepeat(e.target.value)}  name="pswRepeat" id="pswRepeat" required />
                    <hr/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <button type="submit" className="registerbtn">Register</button>
                    <div className="signin">
                        <p>Already have an account?<Link to="/signup"><button className="btn_signup">Signup</button></Link></p>
                    </div>  
                </div>
            </form><br/><br/><br/>
        </div>
         
    )
}
