import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import {Label} from "./Label";
import {Search} from "./Search";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.section};
  border-radius: ${props => props.theme.sizes.borderRadius};
  gap: 10px;
  height: 7vh;
  justify-content: space-between;
  padding: 0px 15px;
  @media (max-width: ${(props) => props.theme.device.mobile.max}) {
    flex-direction: column;
    height: 10vh;
    padding-bottom: 15px;
  }
`

export const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Label text={t('labelSearchCity')}/>
            <Search placeholder={t('placeholderSearchCity')}/>
        </Container>
    );
}

