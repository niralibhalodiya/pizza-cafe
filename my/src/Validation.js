import React from 'react';
class Validation extends React.Component{
        constructor(props){
            super(props);
            this.state={error:{}};
        }
        doValidation(){
            var temperror={}
            const{email,password}=this.state;
            var isValid=true;

            if(!email){
                isValid=false;
                temperror.email="Enter Email";
            }
            if(!password){
                isValid=false;
                temperror.password="Enter Password";
            }
            this.setState({error:temperror})
            return isValid;
        }
        formSubmit(){
            var a=this.doValidation();
            console.log(a);
        }
        render(){
            return(
                <>
                    <h1>Login</h1>
                    Email:<input type="text" onChange={(e)=>this.setState({email:e.target.value})}name='email'/>
                    <p style={{color:'red'}}>{this.state.erroremail}</p>
                    Password:<input type='password' onChange={(e)=>this.setState({password:e.target.value})}name='password'/>
                    <p style={{color:'red'}}>{this.setState.errorpassword}</p>
                    <input type='button' onClick={this.formSubmit.bind(this)}value='Login'/>
                </>
            )
        }
}