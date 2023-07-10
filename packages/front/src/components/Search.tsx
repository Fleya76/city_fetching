import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { gql, useLazyQuery } from "@apollo/client";
import {addCities, City, resetCities} from "../stores/citySlice";
import {useAppDispatch} from "../hooks/stores";

const Input = styled.input`
  border: none;
  border-radius: ${props => props.theme.sizes.borderRadius};
  font-size: ${props => props.theme.fontSizes.large};
  height: ${props => props.theme.sizes.input};
  width: 100%;
  font-weight: bold;
`

interface CitiesResponse {
    searchCitiesByArgs: {
        nodes: City[];
        totalCount: number;
    };
}
interface SearchProps {
    placeholder: string;
}

const CITIES_QUERY = gql`
    query GetCities($searchTerm: String!) {
      searchCitiesByArgs(nomCommune: $searchTerm, take: 100, sortBy: { nomCommune: ASC }) {
        nodes {
          id
          codePostal
          nomCommune
        }
      }
    }
  `;

export const Search: React.FC<SearchProps> = ({placeholder}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useAppDispatch();
    const [getCities, { data }] = useLazyQuery<CitiesResponse>(CITIES_QUERY);


    useEffect(() => {
        const cities = data?.searchCitiesByArgs?.nodes
        if(cities && searchTerm){
            dispatch(addCities(cities))
        } else {
            dispatch(resetCities())
        }
    }, [data, searchTerm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        getCities({ variables: { searchTerm: value } });
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