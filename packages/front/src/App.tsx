import React from 'react';
import styled from 'styled-components'
import {Header} from "./components/Header";
import {Body} from "./components/Body";

const Container = styled.div`
  margin: ${props => props.theme.margin.large} ${props => props.theme.margin.medium} ;
  min-width: ${props => props.theme.device.mobile.min};
`

/**
 * Description: An App component who contains the main part of this application with the header and the body.
 */
const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
