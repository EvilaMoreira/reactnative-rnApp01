import React from "react"; // Importação da biblioteca "React"
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
`;

const Quadrado2 = styled.View`
  background-color: ${props => props.cor};
  width:50px;
  height:100px;
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
     <Quadrado cor="green"></Quadrado>
     <Quadrado2 cor="blue"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado cor="red"></Quadrado>
     <Quadrado cor="green"></Quadrado>
     <Quadrado2 cor="blue"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado cor="#228B22"></Quadrado>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado2 cor="#00FF00"></Quadrado2>
     <Quadrado2 cor="#FFFF00"></Quadrado2>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="#228B22"></Quadrado2>
     <Quadrado2 cor="#32CD32"></Quadrado2>
     <Quadrado cor="#00FF00"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     <Quadrado2 cor="red"></Quadrado2>
     <Quadrado2 cor="green"></Quadrado2>
     <Quadrado cor="blue"></Quadrado>
     <Quadrado cor="#FFFF00"></Quadrado>
     </Header>
    </Pagina>

  );
}

export default App;