import React, {Component} from 'react';

export default class PostCreator extends Component {
    constructor(props){
        super(props)

        this.state = {
            creating: false
        }

    }

    render() {
        return (
            <div className="post-creator col-4 place-3">
                <div className="post-creator-container">
                    <img className="profile-thumbnail" src="https://res.cloudinary.com/djlzeapiz/image/upload/c_thumb,w_200,g_face/v1635894309/code.dev/icons/user_profile.png"/>
                    <div className="input-shape">Escribe algo...</div>
                </div>
            </div>
        )
    }
}