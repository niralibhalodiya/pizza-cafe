import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    setData(){
        localStorage.setItem("mycolor","red");
        alert("Data is set")
    }
    getData(){
        let mydata=localStorage.getItem("mycolor");
        if(mydata)
        {
            alert("Data is:"+mydata)
        }else{
            alert("Data is not set");
        }   
        removeData(){
            localStorage.removeItem('mycolor');
            alert("Data Removed");
        }
    }
    render(){
        return(
            <>
                <h2>local storage</h2>
                <button onClick={this.setData.bind(this)}>setData</button>
                <button onClick={this.getData.bind(this)}>getData</button>
                <button onClick={this.removeData.bind(this)}>removeData</button>
            </>
        )
    }
}