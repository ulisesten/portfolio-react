import React, {Component} from 'react'


export default class ChatBody extends Component {
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map((message, index) => {
            return (
             <li key={"message-"+index} className='message'>
               <div className='from-id' style={{color: message.idColor}}>
                 {message.fromID}:
               </div>
               <div className='message-text'>&nbsp;
                    {message.text}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }