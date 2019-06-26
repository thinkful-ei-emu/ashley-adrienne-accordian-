import React from 'react';

export default class RouletteGun extends React.Component {
  
  static defaultProps ={
    bulletInChamber: 8
  }

  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningChamber: false
    }
  }

  handleClick = () => {
    this.setState({
      spinningChamber: true
    })
    setTimeout(() => 
    {
      let number = Math.ceil(Math.random() * 8)
      // console.log(number);
      this.setState({
        chamber: number,
        spinningChamber: false
      })
    }
     , 2000)
    
    console.log(this.state);
};

componentWillUnmount() {
  clearTimeout(setTimeout);
}

  render () {
    let statement = '';
    if (this.state.spinningChamber === true) {
      statement='Spinning the chamber and pulling the trigger! ....'
    } else if (this.state.chamber === this.props.bulletInChamber) {
      statement='BANG!!!!'
    } else {
      statement="You're safe!!";
    }
    return (
      <div>
        <p>{statement}</p>
        <button onClick={() => this.handleClick()}>Pull the trigger!</button>
      </div>
    )
  }
}