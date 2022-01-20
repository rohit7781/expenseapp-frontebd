import React from 'react'
import Notes from './Notes'

function Dashboard(props) {
    return (
        <div className='container'>
            <Notes showAlert={props.showAlert} />
        </div>
    )
}

export default Dashboard
