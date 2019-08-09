import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders "ball, strike, foul, out" on DOM', () => {
        const { getByText } = render(<Dashboard />);
        const balls = getByText(/ball/i);
        const strikes = getByText(/strike/i);
        const fouls = getByText(/foul/i);
        const hits = getByText(/hit/i);

        fireEvent.click(balls)
        fireEvent.click(strikes)
        fireEvent.click(fouls)
        fireEvent.click(hits)


        expect(balls)
        expect(strikes)
        expect(fouls)
        expect(hits)
    })
});
