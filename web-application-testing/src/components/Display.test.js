import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />)
    })

    it('renders "home, inning, away, ball, strike, out" on DOM', () => {
        const { getByText } = render(<Display />)
        getByText(/home/i)
        getByText(/inning/i)
        getByText(/away/i)
        getByText(/ball/i)
        getByText(/strike/i)
        getByText(/out/i)
    })
});
