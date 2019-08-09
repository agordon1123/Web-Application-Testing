import React from 'react';

const Dashboard = (props) => {
    console.log('Dashboard props: ', props)
    return (
        <div>
            <h1>Score Tracker</h1>

            <div className='buttons'>
                <button onClick={props.addBall} className='ball scoreboard-button'>Ball</button>
                <button onClick={props.addStrike} className='strike scoreboard-button'>Strike</button>
                <button onClick={props.foul} className='foul scoreboard-button'>Foul</button>
                <button onClick={props.hit} className='hit scoreboard-button'>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;
