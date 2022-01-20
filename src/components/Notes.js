
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';


function Notes(props) {
    const context = useContext(noteContext);

    const { notes, getNotes, editNote } = context;
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
            // eslint-disable-next-line
        }
        else {
            navigate("/login", { replace: true });
        }
    })

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", eamount: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, eamount: currentNote.amount, etag: currentNote.tag })

    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.eamount, note.etag)
        refClose.current.click();
        props.showAlert("Updated Successfully", 'success')

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount</label>
                                        <input type="text" className="form-control" id="eamount" name="eamount" value={note.eamount} onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>My Expenses</h2>

                <table class="table my-3">
                    <thead>
                        <tr>

                            <th style={{ width: "30%" }} scope="col">Expenditure</th>
                            <th className='text-center' style={{ width: "15%" }} scope="col">Amount</th>
                            <th style={{ width: "30%" }} scope="col">Description</th>
                            <th className='text-center' style={{ width: "10%" }} scope="col">Date</th>
                            <th className='text-center' scope="col">Update/Delete</th>
                        </tr>
                    </thead>
                </table>
                <div className="container mx-2">
                    {notes.length === 0 && 'No Expenses to display to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />;
                })

                }
            </div>
        </>
    )
}
export default Notes;

