import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";

// criando um componente de texto 
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width:50px;
  height:50px;
`;


const Pagina = styled.View`
  flex:1;
  flex-direction:column;
  justify-content:center;
  align-items:flex-end;
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
     <Quadrado cor="red"></Quadrado>
     <Quadrado cor="green"></Quadrado>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     
     
    </Pagina>
  );
}

export default App;