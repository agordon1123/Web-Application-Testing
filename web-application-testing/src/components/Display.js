import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Display = () => {
    const [ballCount, setBallCount] = useState(2);
    const [strikeCount, setStrikeCount] = useState(0);

    console.log(ballCount);
    console.log(strikeCount);

    const addBall = () => {
        setBallCount(ballCount < 3 ? ballCount + 1 : 0);
    };

    const addStrike = () => {
        setStrikeCount(strikeCount < 2 ? strikeCount + 1 : 0)
    };

    const hit = () => {
        setBallCount(0)
        setStrikeCount(0)
    };

    const foul = () => {
        setStrikeCount(strikeCount < 2 ? strikeCount + 1 : strikeCount)
    };

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
                    <p className='home-score scoreboard-value'>5</p>
                </div>

                <div className='inning'>
                    <h3>Inning ↓</h3>
                    <p className='inning scoreboard-value'>7</p>
                </div>

                <div className='away'>
                    <h3>Away</h3>
                    <p className='away-score scoreboard-value'>5</p>
                </div>
            </div>

            <div className='status'>
                <div className='ball'>
                    <h3>Ball</h3>
                    <p className='ball-count scoreboard-value'>{ballCount}</p>
                </div>

                <div className='strike'>
                    <h3>Strike</h3>
                    <p className='stike-count scoreboard-value'>{strikeCount}</p>
                </div>

                <div className='out'>
                    <h3>Out</h3>
                    <p className='out-count scoreboard-value'>1</p>
                </div>
            </div>

            <Dashboard ball={addBall} strike={addStrike} foul={foul} hit={hit} />
        </div>
    )
}

export default Display;