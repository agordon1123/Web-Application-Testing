import React from 'react';

const Display = (props) => {
    console.log('Display props: ', props)

    return (
        <div>
            <div className='team-names'>
                <h1 className='home-name'>Home</h1>
                <h1 className='away-name'>Away</h1>
            </div>

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
                    <p className='ball-count scoreboard-value'>{props.ballCount}</p>
                </div>

                <div className='strike'>
                    <h3>Strike</h3>
                    <p className='stike-count scoreboard-value'>{props.strikeCount}</p>
                </div>

                <div className='out'>
                    <h3>Out</h3>
                    <p className='out-count scoreboard-value'>1</p>
                </div>
            </div>
        </div>
    )
}

export default Display;
