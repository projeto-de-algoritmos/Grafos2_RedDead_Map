import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import horseMan from '../../assets/horse_man.png';
import MapRD from '../../assets/map.png';

import api from '../../services/api';

import { colors } from '../../theme/colors';

import Select from 'react-select';
import { Button } from '../../components/Button';
import { List } from '../../components/List';

import { IntroSection, IntroText, SelectSection, PathSection, MapSection, Container, Footer, SelectContainer, ErrorMessageContainer, ErrorMessage } from './styles';

// custom styles
const customStyles = {
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none'
  },
};

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    border: `1px solid ${colors.black}`,
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused && `1px solid ${colors.black}`, 
    border: state.isFocused && `1px solid ${colors.black}`, 
    '&:hover': {
      boxShadow: state.isFocused && `1px solid ${colors.black}`,
      border: state.isFocused && `1px solid ${colors.black}`
    }, 
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? colors.red : state.isFocused && colors.lightRed,
    color: state.isSelected ? colors.white : colors.black,
    padding: 15,
  })
}
// =====================================================================================

const Home = () => {

  const [cities, setCities] = useState([]);
  const [startCity, setStartCity] = useState('');
  const [endCity, setEndCity] = useState('');
  const [path, setPath] = useState();
  const [distance, setDistance] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCloseModal = async () => {
      setIsOpen(false);
  }

  //load cities from api
  useEffect(()=> {
    const loadCities = async () => {
      try{
        const { data } = await api.get('/cities');
  
        const options = [];
  
        data.forEach((e)=>{
          options.push(
            {
              value: e,
              label: e
            }
          );
  
          return options;
        })
        
        setCities(options);
      } catch(e) {
        console.error(e);
        setIsError(true);
      }
    }
    
    loadCities();
  }, [])

  const findPath = async () => {
    if(startCity === '' || endCity === ''){
      setIsError(true);
      return;
    }

    setIsError(false);

    try {
      const { data } = await api.post('/path', {
          start: startCity,
          end: endCity
      });

      const { path, distance } = data;
      
      setPath(path);
      setDistance(distance);
      setIsOpen(true);
  
      return data;
    } catch(e) {
      console.error(e);
      setIsError(true);
    }
  }

  return (
      <>
        <Container>
          <IntroSection>
            <IntroText>Bem-vindo(a) ao projeto Red Dead Map!<br /> Neste projeto, você pode encontrar o menor caminho entre uma cidade e outra do mapa do jogo Red Dead Redemption II.</IntroText>
          </IntroSection>
          <SelectSection>
            <SelectContainer>
              <Select
                options={cities}
                placeholder='Escolha uma cidade inicial...'
                styles={selectStyles}
                onChange={(e)=>{
                    setStartCity(e.value);
                }}
                style={{width: '400px'}}
              />
            </SelectContainer>
            <SelectContainer>
              <Select
                options={cities}
                placeholder='Escolha uma cidade de destino...'
                styles={selectStyles}
                onChange={(e)=>{
                    setEndCity(e.value);
                }}
              />
            </SelectContainer>
            <Button text='Localizar' onClick={findPath} />
          </SelectSection>
          {isError && (
            <ErrorMessageContainer>
              <ErrorMessage>Pesquisa inválida, escolha as cidades novamente.</ErrorMessage>
            </ErrorMessageContainer>
          )}
          <MapSection src={MapRD} />
          <Modal isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles}>
              <PathSection>
              {path && (
                  <List items={path} distance={distance} title='Melhor Rota' imageSrc={horseMan} />
                  )}
              </PathSection>
              <Button text='Fechar' onClick={handleCloseModal} />
          </Modal>
          <Footer>
              <p>
              powered by <strong>Vinicius Saturnino</strong> e <strong>Mateus Gomes</strong>
              </p>
          </Footer>
        </Container>
      </>
  )
};

export { Home };