import React, { useContext, useState, useEffect } from 'react';
import userContext from '../context/user/userContext';

function Budjet() {
    const [budgetvalue, setBudgetvalue] = useState("")
    const [money, setmoney] = useState("");

    const context = useContext(userContext);

    const { user, getuserdata, updatebudget } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getuserdata()
            setBudgetvalue(user.budget);
            // eslint-disable-next-line
            // console.log(typeof (user.budget));
        }

    }, [getuserdata, user.budget])



    // console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setBudgetvalue(user.budget);

        let finalval = parseInt(money) + user.budget
        updatebudget(user._id, finalval)

        setBudgetvalue(finalval);
        setmoney("")


    }

    const addbudget = (e) => {
        e.preventDefault();

        setmoney(e.target.value)

    }
    // const budgetclick = (e) => {
    //     e.preventDefault();
    //     const newbudget = parseInt(budget)
    //     Budgetvalue = Budgetvalue + newbudget;
    //     console.log(Budgetvalue);

    // console.log(typeof (money));

    // }

    return <div>
        <div className='flex container'>

            <h4 >Budget : {budgetvalue}</h4>
            <form className='my-3 d-flex flex-row  '>
                <div className='my-3'><input type="text" className="form-control col-md-4" id="money" name="money" aria-describedby="emailHelp" value={money} placeholder='Add your Budget' onChange={addbudget} /></div>

                <div className='mx-3'><button type="submit" className="btn btn-primary my-3" onClick={handleSubmit} >Add Budget</button></div>
            </form>
        </div>
    </div>;
}

export default Budjet;
