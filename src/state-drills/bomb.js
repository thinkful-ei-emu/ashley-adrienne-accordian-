import React from 'react';

export default class Bomb extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(() => {
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
      console.log(this.count);
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    let word = '';
    if (this.state.count >= 8) {
      word = 'BOOM!!!!!';
    } else if (this.state.count %2 === 0) {
      word = 'tick';
    } else {
      word = 'tock';
    }

    return (
      <div>
        <p>{word}</p>
      </div>
    )
  }
}
