

import React, {  useState } from "react"
import "./Login.css"

import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import {userLogin} from '../../api/authenticationService';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Alert,Spinner} from 'react-bootstrap';
function Login ({loading,error,...props}){
    const history=useHistory();
    const [values, setValues] = useState({
        userName: '',
        password: ''
        });

       const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                history.push('/home');
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again'); 
            }


        }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
       

        
    }
    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ",loading);

    return(
        <div class="loginPage" >
        <div id="loginformm" >
        <h2 id="headerTitlee">Admin Login</h2>
        <div>
          <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
          <div class="rows">
    <label>Nom d'utilisateur</label>
    <input type="text" placeholder="Entrez votre nom" minLength={5} value={values.userName} onChange={handleChange} name="userName" required/>
  </div>
  <div class="rows">
    <label>Mot de passe</label>
    <input type="password" placeholder="Entrez votre mot de passe" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
  </div>
  <div id="buttonn" class="rows">
  <button type="submit" >Log in {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />)}</button> 
  </div>
   
     </form>
     { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>

                            }
     </div>
         
          <OtherMethods />
        </div>
        </div>
    )

} 
  


const OtherMethods = props => (
  <div id="alternativeLoginn">
   
   
  </div>
);

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);