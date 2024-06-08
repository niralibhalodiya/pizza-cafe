import React from 'react';
class Changepassword extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    comapare(){
        var a=this.state.txt1
        var b= this.state.txt2
        var d=localStorage.getItem('password')
        if(a===d){
            localStorage.setItem('password',b)
        }else{
            alert('password do not match')
        }
    }
    render(){
        return(
            <>
                old password:<input type="text" onChange={(e)=>this.setState({txt1:e.target.value})}/>
                new password:<input type='text' onChange={(e)=>this.setState({txt2:e.target.value})}/>
                confirmpassword:<input type="text" onChange={(e)=>this.setState({txt3:e.target.value})}/>
                <input type='button' value='submit' onClick={this.comapare.bind(this)}/>
            </>
        )
    }
}