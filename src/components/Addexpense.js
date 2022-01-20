import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import userContext from '../context/user/userContext';

const AddExpense = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", amount: "", tag: "" })



    const context2 = useContext(userContext);
    const { user, updatebudget } = context2;




    const handleClick = (e) => {
        e.preventDefault();
        if (user.budget >= parseInt(note.amount)) {
            addNote(note.title, note.amount, note.tag);
            setNote({ title: "", amount: "", tag: "" })
            props.showAlert("Addeed Successfully", 'success')

            let finalval = user.budget - parseInt(note.amount)
            updatebudget(user._id, finalval)
        }
        else {
            props.showAlert("Your Budget is low ! Kindly add your Budget", 'danger')
            setNote({ title: "", amount: "", tag: "" });
        }

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-3">

            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong><h4>Expenditure Name</h4></strong></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} required />
                    <div id="notesHelp" className="form-text">(Expenditure Name is compulsary )</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label"><strong><h4>Amount</h4></strong></label>
                    <input type="text" className="form-control" id="amount" rows="3" name="amount" value={note.amount} onChange={onChange} required />
                    <div id="notesHelp" className="form-text">(Amount is compulsary)</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><strong><h4>Anything you want to Add</h4></strong></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} required />
                </div>

                <button type="submit" className="btn btn-primary btn-lg my-3" onClick={handleClick}>Add Expenditure</button>
            </form>
        </div>
    )
}

export default AddExpense
