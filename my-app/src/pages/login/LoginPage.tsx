import React from 'react'
import './LoginPage.scss';
class LoginPage extends React.Component{
  
    render(){
        return(
            <>
            <div className="container">
                <div className="login">
              <h1 className="title">
              	Connectez vous
              </h1>
              <div className="blocInput">
                  <label>Username</label>
                  <input placeholder="username" ></input>
              </div>
              <div className="blocInput">
                  <label>Password</label>
                  <input placeholder="password" ></input>
              </div>
              <button className="sendButton">Envoyer</button>
              </div>
              </div>
            </>
        );
    }
};
export default LoginPage;