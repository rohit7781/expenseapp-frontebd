import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const now = note.date.toString();
    return (
        <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }} >{note.title}</td>
                        <td className='text-center' style={{ width: "15%" }}>{note.amount}</td>
                        <td style={{ width: "30%" }}>{note.tag}</td>
                        <td className='text-center' style={{ width: "10%" }}>{now.slice(0, 10)}</td>
                        <td className='text-center'><i className="fas fa-trash-alt " onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", 'success') }} ></i>
                            <i className="fas fa-edit mx-3 " onClick={() => { updateNote(note) }}></i>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Noteitem
