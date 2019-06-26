import React from 'react';

export default class HelloWorld extends React.Component{

state = {
    who: null   
};

handleClick = whoItIs => {
    console.log(whoItIs);
   
    this.setState({
       
            ...this.state.obj,
            who: whoItIs

          
    });
    console.log(this.state)
    
};
render(){

    return (
    <div className ="button-display">
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
        <button onClick={() => this.handleClick('World')}>World</button>
    </div>
    )
    
}
}

