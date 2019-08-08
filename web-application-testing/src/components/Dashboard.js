import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard(buttons)</h1>
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
                    <p className='ball-count scoreboard-value'>9</p>
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

            <div className='buttons'>
                <button className='strike scoreboard-button'>Strike</button>
                <button className='ball scoreboard-button'>Ball</button>
                <button className='foul scoreboard-button'>Foul</button>
                <button className='hit scoreboard-button'>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;