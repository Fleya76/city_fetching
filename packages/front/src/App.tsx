import React from 'react';
import styled from 'styled-components'
import {Header} from "./components/Header";
import {Body} from "./components/Body";

const Container = styled.div`
  margin: 35px 27px;
  min-width: 300px;
`

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
