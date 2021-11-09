import React from "react"; // Importação da biblioteca "React"
import { Image } from 'react-native';
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction:row;
  background-color:#DDD;
  height:200px;
  flex-wrap:wrap;
  justify-content:center;
`;

// criando um componente de texto 
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width:50px;
  height:50px;
  justify-content:center;
  align-items:center;
`;


const Pagina = styled.View`
  flex:1;
`;



function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Header>
     <Quadrado cor="red"></Quadrado>
     <Quadrado cor="green">

       <Image source={require('./src/imagens/gratulina.jpg')}
       style={{ width: 100, height: 100, backgroundColor: '#AAA' }}
      resizeMode='cover' //Ajuste de imagem
      />
     </Quadrado>
    
     <Quadrado cor="blue">
          
       <Image source={require('./src/imagens/download.png')}
       style={{ width: 100, height: 100, backgroundColor: '#AAA' }}
      resizeMode='center' //Ajuste de imagem
      />
     </Quadrado>

     <Quadrado cor="#FFFF00"></Quadrado>
     
     
     </Header>
    </Pagina>

  );
}

export default App;