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

    onIncomingMessage = (data) => {
        this.setState ({
            messagesList: [...this.state.messagesList, data],
            text: ""
        })
    }

    onEnterSendMessage = (e) =>{
        if (e.keyCode === 13) {
            this.onClickSend();
        }
    }

    onClickSend = () =>{
        const data = {
            fromID: "s54uy54ds-df",
            text: this.state.text,
            idColor: this.color,
            channel: this.props.channel
        };

        this.socket.emit("message", data)
        this.onIncomingMessage(data)
    }

    render(){
        if(this.props.courseId)
            this.socket.emit("suscribe", this.props.channel)

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

                        <button onClick={this.onClickSend} className='button-input'>Enviar</button>
                    </div>
                </div>

            </div>
        )
    }

}