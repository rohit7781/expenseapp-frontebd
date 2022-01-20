import React from 'react'
import AddExpense from './Addexpense'
import Budjet from './Budjet'

export default function Home(props) {
    return (
        <div className='container'>
            <Budjet />
            <AddExpense showAlert={props.showAlert} />
        </div>
    )
}
