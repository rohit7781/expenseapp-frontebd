import React from 'react'
import AddExpense from './Addexpense'
import Budjet from './Budjet'

export default function Home(props) {
    return (
        <div className='container my-5'>
            {localStorage.getItem('token') ? <> <Budjet showAlert={props.showAlert} /><AddExpense showAlert={props.showAlert} /></> : <h2>Kindly Login or SignUp to Add your Expenses or to view home Page</h2>}
        </div>
    )
}
