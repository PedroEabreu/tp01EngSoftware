import React, { useState } from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function ScheduleVisit(){
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className="scheduleVisit">
                <header>
                    <span><h2>AGENDAR VISITA</h2></span>
                    <Link className="button" to="/register">Cadastrar novo imóvel</Link>
                    <div><Link className="button" to="/">Voltar a tela principal</Link></div>
                </header>
             
            
            <div className="card">
            <ul>
                <li key="1" >

                <div>
                    <strong>TIPO</strong>
                    <p>Casa</p>
                </div>
                
                <div>
                    <strong>ENDEREÇO</strong>
                    <p>Rua São Mateus, número 30</p>
                </div>

                <div>
                    <strong>BAIRRO</strong>
                    <p>Jacaraíbe</p>
                </div>



                <div>
                    <strong>QUARTOS</strong>
                    <p>3</p>
                </div>

                <div>
                    <strong>SUÍTES:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                </div>

                <div>
                    <strong>SALAS DE ESTAR</strong>
                    <p>1</p>
                </div>

                 
                    <div>
                    <strong>VAGAS NA GARAGEM</strong>
                    <p>3</p>
                </div>

                <div>
                    <strong>ÁREA</strong>
                    <p>60 m²</p>
                </div>

                <div>
                    <strong>ARMÁRIO EMBUTIDO</strong>
                   <p>Sim</p>
                </div>

                <div>
                    <strong>VALOR DO ALUGUEL</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                </div>

                <div>
                    <strong>VALOR DO CONDOMÍNIO</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(55555)}</p>
                </div>

                 <button ></button>

                </li>
                </ul>
                <div className="selectData">
                    <h3 className="divData">Agendar visita para: </h3>
                    <DatePicker className="dataPicker" selected={startDate} onChange={date => setStartDate(date)} />
                    <h3 className="divData label2">Horários disponíveis:</h3>
                    <select style={{width:"250px"}}>
                    <option value="sim">Sim</option>
                    <option value="não">não</option>
                  </select>
                </div>
            </div>
        </div>
    )
}