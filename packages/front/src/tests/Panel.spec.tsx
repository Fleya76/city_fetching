import React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../components/Panel';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';

import '@testing-library/jest-dom/extend-expect';
describe('Panel component', () => {
    test('renders the panel with title and cities', () => {
        const title = 'Cities';
        const cities = [
            { id: "1", nomCommune: 'City 1', codePostal: '12345' },
            { id: "2", nomCommune: 'City 2', codePostal: '67890' },
        ];

        const { getByText, getAllByTestId } = render(
            <ThemeProvider theme={theme}>
                <Panel title={title} cities={cities} />
            </ThemeProvider>
        );

        const titleElement = getByText(title);
        const cityElements = getAllByTestId('city-card');

        expect(titleElement).toBeInTheDocument();
        expect(cityElements.length).toBe(cities.length);
    });
});
