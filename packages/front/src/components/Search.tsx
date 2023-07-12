import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { gql, useLazyQuery } from "@apollo/client";
import {addCities, City, resetCities} from "../stores/citySlice";
import {useAppDispatch} from "../hooks/stores";
import {containsLetters} from "../helpers/containsLetters";
import {hasSpecialCharacters} from "../helpers/hasSpecialCharacters";
import {containsOnlyZeros} from "../helpers/containsOnlyZeros";

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

/**
 * Description: A graphQL query who take 2 params, name and code.
 */
const CITIES_QUERY = gql`
    query GetCities($name: String, $code: Int) {
      searchCitiesByArgs(nomCommune: $name, codePostal: $code, take: 100, sortBy: { nomCommune: ASC }) {
        nodes {
          id
          codePostal
          nomCommune
        }
      }
    }
  `;

/**
 * @param placeholder
 * Description: An Search component used to feed the application (store RTK) with cities data. We can fetch cities data by postalCode or city name.
 */
export const Search: React.FC<SearchProps> = ({placeholder}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch = useAppDispatch();
    const [getCities, { data }] = useLazyQuery<CitiesResponse>(CITIES_QUERY);

    useEffect(() => {
        const cities = data?.searchCitiesByArgs?.nodes
        if(cities && searchTerm && !hasSpecialCharacters(searchTerm)){
            dispatch(addCities(cities))
        } else {
            dispatch(resetCities())
        }
    }, [data, searchTerm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        const args = containsLetters(value) ? { name: value} : { code: containsOnlyZeros(value) ? value : parseInt(value) }
        getCities({ variables: args });
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