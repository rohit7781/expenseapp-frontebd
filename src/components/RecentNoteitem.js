import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote, recentdelete } = context;
    const { note } = props;
    const now = note.date.toString();

    const handleclick = () => {
        const val = 'true'
        recentdelete(note._id, val)
        props.showAlert("Recovered Successfully", 'success')
    }

    return (
        <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }} >{note.title}</td>
                        <td className='text-center' style={{ width: "15%" }}>{note.amount}</td>
                        <td style={{ width: "25%" }}>{note.tag}</td>
                        <td className='text-center' style={{ width: "10%" }}>{now.slice(0, 10)}</td>
                        <td className='text-center'><i className="fas fa-trash-alt " onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", 'success') }} ></i>
                            <i className="fas fa-redo mx-3 " onClick={handleclick}></i>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Noteitem
