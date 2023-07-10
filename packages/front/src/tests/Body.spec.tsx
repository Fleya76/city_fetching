import React from 'react';
import { render } from '@testing-library/react';
import { Body } from '../components/Body';
import {ThemeProvider} from "styled-components";
import {theme} from "../constants/theme";
import {useAppSelector} from "../hooks/stores";

import '@testing-library/jest-dom/extend-expect';

jest.mock('../hooks/stores', () => ({
    useAppSelector: jest.fn(),
}));

describe('Body component', () => {
    test('renders panels with correct titles', () => {
        const metropolisCities = [
            { id: 1, nomCommune: 'Paris', codePostal: '75000' },
            { id: 2, nomCommune: 'Marseille', codePostal: '13000' },
        ];
        const overseasCities = [
            { id: 3, nomCommune: 'Réunion', codePostal: '97400' },
            { id: 4, nomCommune: 'Guadeloupe', codePostal: '97100' },
        ];

        (useAppSelector as jest.Mock).mockReturnValueOnce(metropolisCities);
        (useAppSelector as jest.Mock).mockReturnValueOnce(overseasCities);

        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Body />
            </ThemeProvider>
        );

        // Vérification que les titres des panels sont présents
        const metropolisTitle = getByText('metropolisCity');
        const overseasTitle = getByText('overseasCity');

        expect(metropolisTitle).toBeInTheDocument();
        expect(overseasTitle).toBeInTheDocument();
    });
});
