function add(){
    changeUserInput(input){
        this.setState({
            mytext:input
        });
    }
    addtoList(input){
        let myarray=this.stae.myarray;
        ListArray.push(input);
        this.setState({
            myarray:ListArray,
            mytext:''
        })
    }
    render(){
        return(
            <div>
                Name:<input type="text" placeholder="Enter data" name="txtname" value={this.state.mytext} onChange={(e)=>this.changeUserInput(e.target.value)}/>
                <button onClick={()=>this.addtoList(this.stae.mytext)}>Click Me</button>

                <h4>{this.state.myarray.map((val)=><li>{val}</li>)}</h4>
            </div>
        )
    }
}
export default add;