import React from 'react';

export default class Accordian extends React.Component {
//props named sections
    state = {
        isOpen: false
    }

    handleClick = () => {       
        this.setState({
            isOpen: !this.state.isOpen
        },() => {console.log(this.state)})
    };


render(props) {

        return (
            <div>
                <ul>
                    <li>
                        <button onClick={() => this.handleClick()}></button>
                        <p></p>
                     </li>
                     <li>
                        <button></button>
                        <p></p>
                     </li>
                     <li>
                        <button></button>
                        <p></p>
                     </li>              

                </ul>
            </div>

        )
    }
}