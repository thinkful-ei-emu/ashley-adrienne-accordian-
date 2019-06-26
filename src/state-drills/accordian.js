import React from 'react';
import App from '../App';

//do not need to use app.js file

// export default class Accordian extends React.Component {
// //props named sections
// static defaultProps ={
//     sections: []
//   }
    

// state = {
//         isOpen: false
//     }

//     handleClick = () => {       
//         this.setState({
//             isOpen: !this.state.isOpen
//         },() => {console.log(this.state)})
//     };

//     renderContent() {
//         const currentSection = this.props.sections[this.state.currentSectionIndex]
//         return (
//           <div className='content'>
//             {currentSection.content}
//           </div>
//         )
//       }
     
//       renderButtons() {
//         return this.props.sections.map((section, index) => (
//           <button key={index} onClick={this.handleButtonClick}>
//             {section.title}
//           </button>
//         ))
//       }


// render() {
//     const buttons = this.props.sections.map((section, index) => (
//         <button key={index}>
//           {section.title}          
//         </button>
//       ))



//         return (
//             <div>
//                 <ul className="accordian-tabs">
//                     <li>
//                     <div>
//                         {this.renderButtons()}
//                         {!!this.props.sections.length && this.renderContent()}
//                     </div>
//                      </li>
                    
                               

//                 </ul>
//             </div>

//         )
//     }
// }


export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={idx}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}