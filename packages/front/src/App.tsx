import React from 'react';
import styled from 'styled-components'
import {Header} from "./components/Header";
import {Panel} from "./components/Panel";

const Container = styled.div`
  margin: 35px 27px;
  min-width: 300px;
`

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Panel />
    </Container>
  );
}

export default App;
