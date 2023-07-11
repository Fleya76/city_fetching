import React from 'react';
import styled from "styled-components";
import { Label } from "./Label";
import {Count} from "./Count";
import {City} from "../stores/citySlice";
import {Card} from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top:  ${props => props.theme.padding.medium};
  background-color: ${props => props.theme.colors.section};
  border-radius: ${props => props.theme.sizes.borderRadius};
  width: 100%;
`

const Cards = styled.div`    
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`

interface PanelProps {
    cities: City[]
    title: string;
}

/**
 * @param cities
 * @param title
 * Description: An Panel component that contains the cities card display.
 */
export const Panel: React.FC<PanelProps> = ({cities, title}) => {
    return (
        <Container>
            <Label text={title}/>
            <Count value={cities.length} />
            <Cards>
                {cities.map(city => (
                    <Card key={city.id} name={city.nomCommune} code={city.codePostal}/>
                ))}
            </Cards>
        </Container>
    );
}

