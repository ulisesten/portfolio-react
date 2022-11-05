import { useState, useEffect } from 'react';
import ChatBody from './ChatBody';
import randomColor from "randomcolor";
import socketIOClient from 'socket.io-client';
import { socketio_url } from '../../data/urls';
import './learnersChat.css'

let color = randomColor();
const socket = socketIOClient(socketio_url);
let prev_channel = "";


export default function LearnersChatV2({channel}) {
    const [ user_id, set_user_id] = useState("");
    const [ text, setText ] = useState("");
    const [ messagesList, setMessagesList ] = useState([]);

    useEffect(() => {

        socket.emit("suscribe", {prev_channel: prev_channel, channel: channel});
        prev_channel = channel;
        setMessagesList([]);

    }, [channel]);

    socket.on("message", data => {
        setMessagesList([...messagesList, data])
    });

    socket.on("id", data => {
        set_user_id(data);
    })

    const onChangeMessageInput = (e) => {
        setText(e.target.value);
    }

    const onIncomingMessage = (data) => {
        setMessagesList([...messagesList, data])
        setText("");
    }

    const onEnterSendMessage = (e) =>{
        if (e.keyCode === 13) {
            onClickSend();
        }
    }

    const onClickSend = () =>{
        if(user_id !== "") {
            const data = {
                fromID: user_id,
                text: text,
                idColor: color,
                channel: channel
            };

            socket.emit("message", data)
            onIncomingMessage(data)
        }
    }

    return (
        <div className='learners-chat-container col-6 place-6'>
            <div className='learners-chat'>

                <div className='chat-header'>
                    Chat del curso
                </div>

                <div className='chat-body'>
                    <ChatBody messages={messagesList}/>
                </div>

                {channel? <div className='chat-input'>
                    <input
                        onChange={onChangeMessageInput}
                        value={text}
                        onKeyDown={onEnterSendMessage}
                        className='text-input'
                        type="text"
                        placeholder="Enter your message..."/>

                    <button onClick={onClickSend} className='button-input'>Enviar</button>
                </div> : <></>}
            </div>

        </div>
    )
}