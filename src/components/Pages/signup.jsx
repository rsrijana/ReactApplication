import{ React, UseState, UseEffect} from "react";
import "../Pages/Signup.css";
import Firebase from "../Firebase"
 
const signup=()=>{


    UseEffect(() => {
        return () => {
            Firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    return response;
                }).catch((error) => {
                return error;
            });
        };
    });

    const [email, setEmail] = UseState('');
    const [password, setPassword] = UseState('');
   
    // //send data to firestore
    const handleSignup = (e) => {
        e.preventDefault();
        
        const firestore = Firebase.firestore() //making firestore object
            firestore.collection("login").add({
                email: email,
                password: password,
                
            }).then(function (response) {
                alert("signup successful");
                // history.push("/");
            }).catch(function (error) {
                alert("failed to signin ! please try again");
            });
      
    };

return(
    <div>
        <div>
      <div className="signup">
        <h2 className="signup-header">Log in</h2>
        <form className="signup-container" onSubmit={handleSignup}>
          <p><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" /></p>
          <p><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /></p>
          <p><input type="submit" value="Log in"/></p>
        </form>
      </div>
    </div>

    </div>   
)
}
export default signup;