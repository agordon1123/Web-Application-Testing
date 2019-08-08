import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Display = () => {
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);

    console.log(ballCount)

    const addBall = () => {
        setBallCount(ballCount < 3 ? ballCount + 1 : 0);
    }

    return (
        <div>
            <h1>Display</h1>
            <div className='teams'>
                <img src="https://img.icons8.com/dotty/80/000000/dragon.png" />
                    <p>at</p>
                <img src="https://img.icons8.com/dotty/80/000000/tiger.png" />
            </div>

            <div className='scores'>
                <div className='home'>
                    <h3>Home</h3>
                    <p className='home-score scoreboard-value'>9</p>
                </div>

                <div className='inning'>
                    <h3>Inning</h3>
                    <p className='inning scoreboard-value'>9</p>
                </div>

                <div className='away'>
                    <h3>Away</h3>
                    <p className='away-score scoreboard-value'>9</p>
                </div>
            </div>

            <div className='status'>
                <div className='ball'>
                    <h3>Ball</h3>
                    <p className='ball-count scoreboard-value'>{ballCount}</p>
                </div>

                <div className='strike'>
                    <h3>Strike</h3>
                    <p className='stike-count scoreboard-value'>9</p>
                </div>

                <div className='out'>
                    <h3>Out</h3>
                    <p className='out-count scoreboard-value'>9</p>
                </div>
            </div>

            <Dashboard props={addBall} />
        </div>
    )
}

export default Display;