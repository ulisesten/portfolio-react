import React, { Component } from 'react';
import ChatBody from './ChatBody';
import randomColor from "randomcolor";
import socketIOClient from 'socket.io-client';
import { socketio_url } from '../../data/urls';
import './learnersChat.css'


export default class LearnersChat extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            messagesList: [],
            updating: true
        }

        this.color =  randomColor()

        this.socket = socketIOClient(socketio_url);
    }

    componentDidMount() {
        this.socket.on("message", data => {
            this.setState({
                messagesList: [...this.state.messagesList, data]
            })
        });
    }

    onChangeMessageInput = (e) => {
        this.setState ({
            text: e.target.value
        })
    }

    onIncomingMessage = (fromID, message) => {
        let data = {fromID: fromID, text: message, idColor: this.color, channel: this.props.courseId };

        this.setState ({
            messagesList: [...this.state.messagesList, data],
            text: "",
            updating: false
        })

    }

    onEnterSendMessage = (e) =>{
        if (e.keyCode === 13) {
            this.onClickSend();
        }
    }

    onClickSend = () =>{
        this.setState({updating: true})
        this.socket.emit("message", {fromID: "s54uy54ds-df", text: this.state.text, idColor: this.color, channel: this.props.courseId })
        this.onIncomingMessage( "s54uy54ds-df", this.state.text)
    }

    render(){
        return (
            <div className='learners-chat-container col-6 place-6'>
                <div className='learners-chat'>

                    <div className='chat-header'>
                        Chat del curso
                    </div>

                    <div className='chat-body'>
                        <ChatBody messages={this.state.messagesList}/>
                    </div>

                    <div className='chat-input'>
                        <input
                            onChange={this.onChangeMessageInput}
                            value={this.state.text}
                            onKeyDown={this.onEnterSendMessage}
                            className='text-input'
                            type="text"
                            autoFocus={true}
                            placeholder="Enter your message..."/>

                        <button onClick={this.onClickSend} className='button-input'>ENVIAR</button>
                    </div>
                </div>

            </div>
        )
    }

}