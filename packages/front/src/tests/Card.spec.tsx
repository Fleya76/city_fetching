import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Card } from '../components/Card';
import { theme } from "../constants/theme";

import '@testing-library/jest-dom/extend-expect';

describe('Card component', () => {
    test('renders the city name and postal code', () => {
        const cityName = 'Paris';
        const postalCode = '75000';

        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Card name={cityName} code={postalCode} />
            </ThemeProvider>
        );

        const nameElement = getByText(cityName);
        const codeElement = getByText(postalCode);

        expect(nameElement).toBeInTheDocument();
        expect(codeElement).toBeInTheDocument();
    });
});
