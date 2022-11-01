import React, {Component} from "react";
import Settings from "@mui/icons-material/Settings";
import PostCreator from "../PostCreator/PostCreator";
import "./publication.css";

export class Publication extends Component {
    static displayName = Publication.name;

    constructor(props){
        super(props);

        this.state = {
            publications: null
        }
    }

    render() {
        return (
            <section className="publications-container">
                <PostCreator />
                {
                    this.state.publications? (<></>) : (
                        <><div className="publication col-4 place-2">
                            <div className="publication-header"></div>
                            <div className="body">
                                Esta sección está en desarrollo.
                                Aquí se desplegaran las publicaciones de tu news feed.
                                También podrás comentar y reaccionar a ellas.
                                El siguiente es un ejemplo de cómo se verá una publicación.
                            </div>
                        </div>
                        <div className="publication col-4 place-2">
                            <div className="publication-header"><h2 className="name">Nombre</h2><Settings className="settings"/></div>
                            <p className="body">
                                Este será el contentido de la publicación.
                                Como función tendremos la posibilidad de hacer referencia
                                a alguno de los ejemplos de código fuente que encontremos en
                                los cursos. De esa forma podremos obtener ayuda de alguno de
                                los miembros del sitio.
                            </p>
                            <div className="panel">
                                <button className="button social-button-left">Me gusta</button>
                                <button className="button social-button-middle">Comentar</button>
                                <button className="button social-button-right">Compartir</button>
                            </div>
                        </div>
                        </>
                    )
                }
                
            </section>
        )
    }
}

/*
<div className="publication col-4 place-2">
                    <div className="publication-header"><h2 className="name">Name</h2><Settings className="settings"/></div>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                       deserunt mollit anim id est laborum.</p>
                    <div className="panel">
                        <button className="button social-button-left">Me gusta</button>
                        <button className="button social-button-middle">Comentar</button>
                        <button className="button social-button-right">Compartir</button>
                    </div>
                </div>

                <div className="publication col-4 place-2">
                    <div className="publication-header"><h2 className="name">Name</h2><Settings className="settings"/></div>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                       deserunt mollit anim id est laborum.</p>
                    <div className="panel">
                       <button className="button social-button-left">Me gusta</button>
                       <button className="button social-button-middle">Comentar</button>
                       <button className="button social-button-right">Compartir</button>
                    </div>
                </div>
*/