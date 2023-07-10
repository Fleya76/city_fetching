import React from 'react';
import { render } from '@testing-library/react';
import { Label } from '../components/Label';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';

import '@testing-library/jest-dom/extend-expect';

describe('Label component', () => {
    test('renders the label text', () => {
        const labelText = 'Hello, world!';

        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Label text={labelText} />
            </ThemeProvider>
        );

        const labelElement = getByText(labelText);

        expect(labelElement).toBeInTheDocument();
    });
});
