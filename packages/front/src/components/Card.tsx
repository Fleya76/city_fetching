import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  background-color:  ${props => props.theme.colors.card};
  margin: ${props => props.theme.margin.medium};
  height: 67px;
  width: 40%;
  @media (max-width: ${(props) => props.theme.device.tablet.max}) {
    width: 100%;
  }
`;

const Name = styled.span`
  color: white;
  font-weight: bold;
  padding-left: ${props => props.theme.padding.large};
  
`;

const Code = styled.span`
  color: lightgrey;
  font-weight: bold;
  padding-right: ${props => props.theme.padding.large};

`;

interface CardProps {
    name: string;
    code: string;
}

export const Card: React.FC<CardProps> = ({name, code}) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Code>{code}</Code>
        </Container>
    );
}

