import React from 'react'
import './LoginPage.scss';
class LoginPage extends React.Component{

    constructor(props) {

        super(props);
    
        this.state = {
          userName: '',
          password: '',
          
        };
    
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
      
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

      userNameChange(event) {
        this.setState({
          userName: event.target.value
        });
        console.log(event.target.value);
      }
    
         passwordChange(event) {
        this.setState({
          password: event.target.value
        });
      }
    
      


    handleSubmit(event) {
        console.log("form has been submitted: ");
        console.log(this.state.userName+" - "+this.state.password);
        event.preventDefault();
      }

  
    render(){
        return(
            <>
            <div className="container">
                <div className="login">
              <h1 className="title">
              	Connectez vous
              </h1>
              <form onSubmit={this.handleSubmit}>
              <div className="blocInput">
                  <label>Username</label>
                  <input placeholder="username"  value={this.state.userName} onChange={this.userNameChange} ></input>
              </div>
              <div className="blocInput">
                  <label>Password</label>
                  <input type="password" placeholder="password" value={this.state.password} onChange={this.passwordChange}  ></input>
              </div>
              <button type="submit" className="sendButton">Envoyer</button>
              </form>
              </div>
              
              </div>
            </>
        );
    }
};
export default LoginPage;