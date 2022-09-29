import React, {Component} from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { Store } from 'react-notifications-component';

import "./postCreator.css";
import 'react-notifications-component/dist/theme.css'
import Close from '@mui/icons-material/Close'


export default class PostCreator extends Component {
    constructor(props){
        super(props)

        this.state = {
            creating: false,
            postContent: ""
        }

    }

    componentDidMount() {
        //this.populateClientData();
    }

    onClickPostCreator = ()=>{
        this.setState({creating: true});
    }

    onClickClose = ()=>{
        this.setState({creating: false});
    }

    onClickCreatePost = () => {
        if(this.state.postContent === ""){
            Store.addNotification({
                title: "Oops!",
                message: "Debes escribir algo",
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 1000,
                  onScreen: true
                }
              });
        }

    }
    

    render() {

        let normal = (  <div className="post-creator col-4 place-2">
                            <div className="post-creator-container">
                                <img className="profile-thumbnail" src="https://res.cloudinary.com/djlzeapiz/image/upload/c_thumb,w_200,g_face/v1635894309/code.dev/icons/user_profile.png" alt="image profile"/>
                                <div className="input-shape" onClick={this.onClickPostCreator}>Escribe algo...</div>
                            </div>
                        </div>)

        return this.state.creating? (
                    <>
                    <ReactNotifications />
                    <div className="post-creator col-4 place-2">
                        <div className='fluid'>
                            <h3>Creando post</h3> <Close className='icon' onClick={this.onClickClose}/>
                        </div>
                        <div className="post-creator-container">
                        <div>
                            <img className="profile-thumbnail" src="https://res.cloudinary.com/djlzeapiz/image/upload/c_thumb,w_200,g_face/v1635894309/code.dev/icons/user_profile.png" alt="image profile"/>
                        </div>
                            <textarea placeholder='Escribe algo...' className='input-shape'></textarea>
                        </div>
                        <div>
                            <button className='button' onClick={this.onClickCreatePost}>Crear</button>
                        </div>
                    </div>
                    </>
            ) : (
                normal
            )
    }

    async populateClientData() {
        
        let server_url = "https://the-code-api.herokuapp.com/api/publications";
        const response = await fetch(server_url);
        const data = await response.json();

        //this.setState({ clientes: data, loading: false });
        console.log(data);
        
      }
}