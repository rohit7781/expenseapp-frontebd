import React, { useState } from 'react';

function Budjet() {
    const [budget, setBudget] = useState("")

    let Budgetvalue = 0;
    const addbudget = (e) => {
        e.preventDefault();
        setBudget(e.target.value)

    }
    const budgetclick = (e) => {
        e.preventDefault();
        const newbudget = parseInt(budget)
        Budgetvalue = Budgetvalue + newbudget;
        console.log(Budgetvalue);


    }

    return <div>
        <div className='flex container'>

            <h4 >Budget : {Budgetvalue}</h4>
            <form className='my-3 d-flex flex-row  '>
                <div className='my-3'><input type="text" className="form-control col-md-4" id="money" name="money" aria-describedby="emailHelp" value={budget} placeholder='Add your Budget' onChange={addbudget} /></div>

                <div className='mx-3'><button type="submit" className="btn btn-primary my-3" onClick={budgetclick} >Add Budget</button></div>
            </form>
        </div>
    </div>;
}

export default Budjet;
