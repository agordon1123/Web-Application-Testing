import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Display = () => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    return (
        <div>
            <div className='teams'>
                <img src="https://img.icons8.com/dotty/80/000000/dragon.png" />
                    <p>at</p>
                <img src="https://img.icons8.com/dotty/80/000000/tiger.png" />
            </div>

            <Dashboard />
        </div>
    )
}

export default Display;