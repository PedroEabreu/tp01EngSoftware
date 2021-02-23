import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: theme.palette.background.paper,
      //width: 500,
     
      
    },
  }));
  
  export default function Register(props){
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [valorAluguel,setValorAluguel] = useState('');
    const [quartos,setQuartos] = useState('');
    const [suites,setSuites] = useState('');
    const [salaJantar,setSalaJantar] = useState('');
    const [salaEstar,setSalaEstar] = useState('');
    const [andar,setAndar] = useState('');
    const [area,setArea] = useState('');
    const [vagasGaragem,setVagasGaragem] = useState('');
    const [armarioEmbutido,setArmarioEmbutido] = useState('');
    const [descricao,setDescricao] = useState('');
    const [endereco,setEndereco] = useState('');
    const [bairro,setBairro] = useState('');
    const [valorCondominio,setValorCondominio] = useState('');
    const [portaria,setPortaria] = useState('');

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

    function handleRegister(e){
      e.preventDefault();
      const data = {
        valorAluguel,
        quartos,
        suites,
        salaEstar,
        area,
        vagasGaragem,
        armarioEmbutido,
        descricao,
        endereco,
        bairro,
      }
      console.log(data)
    }

    function handleRegisterApt(e){
      e.preventDefault();
      const data = {
        valorAluguel,
        quartos,
        suites,
        salaEstar,
        area,
        vagasGaragem,
        armarioEmbutido,
        descricao,
        endereco,
        bairro,
        valorCondominio,
        portaria,
        salaJantar

      }
      console.log(data)
    }
  
    return (
    <div className="register-container">
      <div className="root">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Casa" {...a11yProps(0)} />
            <Tab label="Apartamento" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="forms">
            <form id="form1" onSubmit={handleRegister}>
                 <label className="label">Valor do Aluguel</label>
                 <input placeholder="Valor do aluguel" type="number"
                  value={valorAluguel} onChange={e => setValorAluguel(e.target.value)}
                 />
                    <label className="label">Quartos</label>
                 <input placeholder="Quartos" type="number"
                  value={quartos} onChange={e => setQuartos(e.target.value)}
                  />
                     <label className="label">Suítes</label>
                 <input placeholder="Suítes" type="number"
                  value={suites} onChange={e => setSuites(e.target.value)}
                  />
                     <label className="label">Sala de estar</label>
                 <input placeholder="Sala de estar" type="number"
                  value={salaEstar} onChange={e => setSalaEstar(e.target.value)}
                  />
                   <label className="label">Área</label>
                 <input placeholder="Área" type="number"
                  value={area} onChange={e => setArea(e.target.value)}
                  />
                   <label className="label">Vagas na garagem</label>
                 <input placeholder="Vagas na garagem" type="number"
                  value={vagasGaragem} onChange={e => setVagasGaragem(e.target.value)}
                  />
                  <label className="label">Armário embutido</label>
                  <select value={armarioEmbutido} onChange={e => setArmarioEmbutido(e.target.value)}>
                    <option value="laranja">Sim</option>
                    <option value="laranja">Sim</option>
                  </select>
               
                  <label className="label">Descrição</label>
                 <input placeholder="Descrição"
                  value={descricao} onChange={e => setDescricao(e.target.value)}
                  />
                   <label className="label">Endereço</label>
                 <input placeholder="Endereço"
                  value={endereco} onChange={e => setEndereco(e.target.value)}
                  />
                  <label className="label">Bairro</label>
                 <input placeholder="Bairro"
                  value={bairro} onChange={e => setBairro(e.target.value)}
                  />
                 <div style={{display:'flex', 'margin-top':"30px"}}>
                    <button className="button btRegister" type="submit">Cadastrar</button>
                    <div className="divBtn1"><Link className="button" to="/">Voltar a tela principal</Link></div>
                 </div>
                </form>
                </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="forms">
            <form id="form2" onSubmit={handleRegisterApt}>

            <label className="label">Valor do Aluguel</label>
                 <input placeholder="Valor do aluguel" type="number"
                  value={valorAluguel} onChange={e => setValorAluguel(e.target.value)}
                 />
                    <label className="label">Quartos</label>
                 <input placeholder="Quartos" type="number"
                  value={quartos} onChange={e => setQuartos(e.target.value)}
                  />
                     <label className="label">Suítes</label>
                 <input placeholder="Suítes" type="number"
                  value={suites} onChange={e => setSuites(e.target.value)}
                  />
                     <label className="label">Sala de estar</label>
                 <input placeholder="Sala de estar" type="number"
                  value={salaEstar} onChange={e => setSalaEstar(e.target.value)}
                  />
                   <label className="label">Área</label>
                 <input placeholder="Área" type="number"
                  value={area} onChange={e => setArea(e.target.value)}
                  />
                   <label className="label">Vagas na garagem</label>
                 <input placeholder="Vagas na garagem" type="number"
                  value={vagasGaragem} onChange={e => setVagasGaragem(e.target.value)}
                  />
                  <label className="label">Armário embutido</label>
                  <select value={armarioEmbutido} onChange={e => setArmarioEmbutido(e.target.value)}>
                    <option value="laranja">Sim</option>
                    <option value="laranja">Sim</option>
                  </select>
               
                  <label className="label">Descrição</label>
                 <input placeholder="Descrição"
                  value={descricao} onChange={e => setDescricao(e.target.value)}
                  />
                   <label className="label">Endereço</label>
                 <input placeholder="Endereço"
                  value={endereco} onChange={e => setEndereco(e.target.value)}
                  />
                 
                 <label className="label">Valor do condomínio</label>
                 <input placeholder="Valor do condomínio" type="number"
                  value={valorCondominio} onChange={e => setValorCondominio(e.target.value)}
                  />
                 <label className="label">Bairro</label>
                 <input placeholder="Bairro"
                  value={bairro} onChange={e => setBairro(e.target.value)}
                  />
                 <label className="label">Salas de jantar</label>
                 <input placeholder="Salas de jantar" type="number"
                   value={salaJantar} onChange={e => setSalaJantar(e.target.value)}
                 />
                 <label className="label">Andar</label>
                 <input placeholder="Andar" type="number"
                  value={andar} onChange={e => setAndar(e.target.value)}
                  />
                 <label className="label">Valor do condomínio</label>
                 <input placeholder="Valor do condomínio" type="number"
                  value={valorCondominio} onChange={e => setValorCondominio(e.target.value)}/>
                 <label className="label">Portaria 24h</label>
                 <input placeholder="Portaria 24h"
                  value={portaria} onChange={e => setPortaria(e.target.value)}
                  />

                <div style={{display:'flex', 'margin-top':"30px"}}>
                 <button className="button btRegister" type="submit">Cadastrar</button>
                 <div className="divBtn3 btRegister"><Link className="button" to="/">Voltar a tela principal</Link></div>
                </div>

                 </form>
                </div>
          </TabPanel>
        </SwipeableViews>
      </div>
      </div>
    );
  }