import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
//import logoImg from '../../assets/logo.svg';
import './styles.css';

//import api from '../../services/api';

export default function Search(){
    const[incidents,setIncidents] = useState([])
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    

    /*useEffect(() => {
            set(response.data);
        
    });*/

    async function handleDeleteIncident(id){
      /*try{
        await api.delete(`incidents/${id}`, {
          headers: {
              Authorization: ongId,
          }  
        });
        setIncidents(incidents.filter(incident => incident.id!=id));
      }catch(err){
         alert('Erro ao deletar caso, tente novamente.');
      }  */
    }


    function handleLogout(){
      /*  localStorage.clear();
        history.push('/');*/
    }
    const [agendar,setAgendar] = useState(false);
    return(
        <div className="profile-container">
            <header>
                <span>Bem vindo.{ongName}</span>
                <Link className="button" to="/register">Cadastrar novo imóvel</Link>
                <div><Link className="button" to="/">Voltar a tela principal</Link></div>

            </header>
            <h1>Imóveis cadastrados</h1>
            <ul>
              {incidents.map(incident => (
                <li key={incident.id}>
                 <strong>CASO:</strong>
                 <p>{incident.title}</p>

                 <strong>ENDEREÇO</strong>
                 <p>{incident.description}</p>

                 <strong>VALOR:</strong>
                 <span>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(incident.value)}</span>
                 <strong>VALOR CONDOMÍNIO:</strong>
                 <span>123213</span>

                </li> 
              ))}                  
            </ul>

                <ul>
                <li key="1" style={{display:"flex"}}>

                <div style={{width: "50%"}}>
                    <strong>TIPO</strong>
                    <p>Casa</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>ALUGUEL:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>

                    <strong>QUARTOS</strong>
                    <p>Casa nova blablabla</p>

                 </div>

                 <div style={{width: "50%"}}>
                 <strong>VAGAS</strong>
                    <p>5</p>

                    <strong>BAIRRO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>ÁREA</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <button onPress={ () => {setAgendar(true)}} >Agendar</button>

                </li> 
                
                <li key="1" style={{display:"flex"}}>

                <div style={{width: "50%"}}>
                    <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <div style={{width: "50%"}}>
                 <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <button>Agendar</button>

                </li> 

                <li key="1" style={{display:"flex"}}>

                <div style={{width: "50%"}}>
                    <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <div style={{width: "50%"}}>
                 <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <button>Agendar</button>

                </li> 

                <li key="1" style={{display:"flex"}}>

                <div style={{width: "50%"}}>
                    <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <div style={{width: "50%"}}>
                 <strong>CASA</strong>
                    <p>Bairro Verde</p>

                    <strong>ENDEREÇO</strong>
                    <p>Casa nova blablabla</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                 </div>

                 <button>Agendar</button>

                </li> 
                
                </ul>

        </div>
    );
}