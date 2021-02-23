import React from 'react';
import './styles.css'
import predioImage from '../../assets/predios.png'
import {Link, useHistory} from 'react-router-dom';

export default function MainScreen(){
    return(
        <div className="divPrincipal">
            <h1 className="titleMain">1 ANDAR</h1>
            <div className="main-screen-container">
                <section className="form">
                    
                        {/*<input placegolder="Rua"/>*/}
                        <div className="divButtons">
                            <div className="divBtn1"><Link className="button" to="/register">Cadastrar novo imóvel</Link></div>
                            <div className="divBtn2"><Link className="button" to="/search">Agendar visita</Link></div>
                        </div>
                </section>
            </div>
        </div>
    );
}