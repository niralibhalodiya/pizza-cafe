import Reacct from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        let mydata=localStorage.getItem("counter");
        if(mydata)
         {
            this.setState({txt1:parseInt(mydata)});
         }else{
            this.setState({txt1:0})
         } 
    }
    incrementData(){
        let mydata=localStorage.getItem("counter");
        if(mydata)
        {
            var no1=parseInt(mydata)+1;
            this.setState({txt1:no1});
            localStorage.setItem("counter",no1);
        }else{
            localStorage.setItem("counter",0);
            this.setState({txt1:0});
        }
    }
    decrementData(){
        let mydata=localStorage.getItem("counter");
        if(mydata)
        {
            var no1=parseInt(mydata)-1;
            this.setState({txt1:no1});
            localStorage.setItem("counter",no1)
        } else{
            localStorage.setItem("counter",0);
        }  
    }
    removeData(){
        localStorage.removeItem('counter');
        this.setState({txt1:"Data Removed"});
    }
    render(){
        return(
            <>
                <h2>localStorage</h2>
                value is:{this.state.txt1}
                <button onClick={this.incrementData.bind(this)}>+Data</button>
                <button onClick={this.decrementData.bind(this)}>-data</button>
                <button onClick={this.removeData.bind(this)}>x data</button>
            </>
        )
    }
}