import React from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div<{ value: number }>`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: ${props => props.value > 0 ? props.theme.colors.primary : props.theme.colors.secondary};
  margin: ${props => props.theme.margin.medium};
  padding-left: ${props => props.theme.padding.large};
  height: 6vh;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    padding-left: ${props => props.theme.padding.medium};
  }
`;

interface CountProps {
    value: number;
}
const findTranslation = (value: number): string => value ? value > 1 ? 'citiesFound' : 'cityFound' : 'cityEmpty';

/**
 * Description: A simple component to find and display the good translations related to the cities count.
 * @param value
 */
export const Count: React.FC<CountProps> = ({ value }) => {
    const { t } = useTranslation();
    const translationKey = findTranslation(value);

    return (
        <Container value={value}>
            {t('searchResult.labelResult', {result: t(`searchResult.${translationKey}`, { number: value })})}
        </Container>
    );
};
