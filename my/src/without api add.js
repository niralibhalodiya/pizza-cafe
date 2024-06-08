import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mytext:'',
            myarray:[]
        }
    }
    changeUserInput(input){
        this.setState({
            mytext:input
        });
    }
    addtoList(input){
        let ListArray=this.state.myarray;
        ListArray.push(input);
        this.setState({
            myarray:ListArray,
            mytext:''
        })
    }
    render(){
        return(
            <div>
                Name:<input type="text" placeholder='Enter data' name="txtname" value={this.state.mytext} onChange={(e)=>this.changeUserInput(e.target.value)}/>
                <button onClick={()=>this.addtoList(this.state.mytext)}>Click Me</button>

                <h4>{this.state.myarray.map((val)=><li>{val}</li>)}</h4>
            </div>

        )
    }
}
export default add;