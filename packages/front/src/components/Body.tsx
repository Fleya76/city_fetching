import React, { useMemo } from 'react';
import styled from "styled-components";
import {City, selectCities} from "../stores/citySlice";
import {useAppSelector} from "../hooks/stores";
import {isOverseasPostalCode} from "../helpers/isOverseasPostalCode";
import {Panel} from "./Panel";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  display: flex;
  margin-top: ${props => props.theme.margin.medium};
  gap: 10px;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    flex-direction: column;
  }
`

export const Body: React.FC = () => {
    const { t } = useTranslation();
    const cities = useAppSelector(selectCities);
    
    const {metropolisCities, overseasCities } = useMemo(() => {
        const metropolisCities: City[] = [];
        const overseasCities: City[] = [];

        cities.forEach(city => {
            if (isOverseasPostalCode(city.codePostal)) {
                overseasCities.push(city);
            } else {
                metropolisCities.push(city);
            }
        });

        return { metropolisCities, overseasCities };
    }, [cities]);

    return (
        <Container>
            <Panel title={t('metropolisCity')} cities={metropolisCities}/>
            <Panel title={t('overseasCity')} cities={overseasCities}/>
        </Container>
    );
}
