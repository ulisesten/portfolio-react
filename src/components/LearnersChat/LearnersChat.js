import React, { Component } from 'react'
import './learnersChat.css'


export default class LearnersChat extends Component {
    constructor(props){
        super(props)


    }

    render(){
        return (
            <div className='learners-chat-container col-6 place-6'>
                <div className='learners-chat'>
                    <div className='chat-header'>
                        Learners Chat
                    </div>
                    <div className='chat-body'>

                    </div>
                    <div className='chat-input'>
                        <input className='text-input' type="text"/>
                        <button className='button-input'>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }

}