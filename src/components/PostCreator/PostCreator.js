import React, {Component} from 'react';

export default class PostCreator extends Component {
    constructor(props){
        super(props)

        this.state = {
            creating: false
        }

    }

    componentDidMount() {
        //this.populateClientData();
      }
    

    render() {
        return (
            <div className="post-creator col-4 place-2">
                <div className="post-creator-container">
                    <img className="profile-thumbnail" src="https://res.cloudinary.com/djlzeapiz/image/upload/c_thumb,w_200,g_face/v1635894309/code.dev/icons/user_profile.png" alt="image profile"/>
                    <div className="input-shape">Escribe algo...</div>
                </div>
            </div>
        )
    }

    async populateClientData() {
        /*const isLocalhost = Boolean(
            window.location.hostname === 'localhost' ||
            // [::1] is the IPv6 localhost address.
            window.location.hostname === '[::1]' ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
          );*/
        //let server_url = (isLocalhost)? "http://localhost:8081/api/publications" : "https://the-code-api.herokuapp.com/api/publications";
        let server_url = "https://the-code-api.herokuapp.com/api/publications";
        const response = await fetch(server_url);
        const data = await response.json();
        //this.setState({ clientes: data, loading: false });
        console.log(data);
      }
}