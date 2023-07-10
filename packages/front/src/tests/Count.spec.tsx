import React from 'react';
import { render } from '@testing-library/react';
import {ThemeProvider} from "styled-components";

import { Count } from '../components/Count';
import { theme } from "../constants/theme";

import '@testing-library/jest-dom/extend-expect';

describe('Count component', () => {
    test('renders the correct translation based on the value', () => {
        const value = 0;

        const { getByText } = render(<ThemeProvider theme={theme}>
            <Count value={value} />
        </ThemeProvider>);

        const translation = getByText('searchResult.labelResult');

        expect(translation).toBeInTheDocument();
    });
});
