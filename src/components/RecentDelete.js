import React, { useContext, useEffect } from 'react';
import RecentNoteitem from './RecentNoteitem';
import noteContext from '../context/notes/noteContext';




const RecentDelete = (props) => {

    const context = useContext(noteContext);

    const { notes, getNotes } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
            // eslint-disable-next-line
        }

    })



    return <div className='container'>
        <div className='row my-3'>
            <h2>My Expenses</h2>

            <table className="table my-3">
                <thead>
                    <tr>

                        <th style={{ width: "30%" }} scope="col">Expenditure</th>
                        <th className='text-center' style={{ width: "15%" }} scope="col">Amount</th>
                        <th style={{ width: "30%" }} scope="col">Description</th>
                        <th className='text-center' style={{ width: "10%" }} scope="col">Date</th>
                        <th className='text-center' scope="col">Delete-Update</th>
                    </tr>
                </thead>
            </table>
            <div className="container mx-2">
                {notes.length === 0 && 'No Expenses to display to display'}
            </div>
            {notes.map((note) => {
                if (!note.display) {
                    return <RecentNoteitem key={note._id} showAlert={props.showAlert} note={note} />;
                }
                return false;
            }).reverse()

            }
        </div>
    </div >;
};

export default RecentDelete;
