import React, { useState } from 'react';
import styled from 'styled-components'

const Input = styled.input`
  border: none;
  border-radius: ${props => props.theme.sizes.borderRadius};
  font-size: ${props => props.theme.fontSizes.large};
  height: ${props => props.theme.sizes.input};
  width: 100%;
  font-weight: bold;
`


interface SearchProps {
    placeholder: string;
}
export const Search: React.FC<SearchProps> = ({placeholder}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        console.log('value', event.target.value)
    };

    return (
        <Input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder}
        />
    );
};