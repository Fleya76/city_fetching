import React from 'react';
import styled from 'styled-components'

interface LabelProps {
    text: string;
}

const Container = styled.span`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  white-space: nowrap;
`

 /**
 * @param text
 * *Description: An simple label with style to display some text.
 */
export const Label: React.FC<LabelProps> = ({text}) => {
    return (
        <Container>
            {text}
        </Container>
    );
}
