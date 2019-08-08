import React from 'react';

const Dashboard = (props) => {
    console.log('Dashboard props: ', props)
    return (
        <div>
            <h1>Dashboard</h1>

            <div className='buttons'>
                <button className='strike scoreboard-button'>Strike</button>
                <button onClick={props.props} className='ball scoreboard-button'>Ball</button>
                <button className='foul scoreboard-button'>Foul</button>
                <button className='hit scoreboard-button'>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;