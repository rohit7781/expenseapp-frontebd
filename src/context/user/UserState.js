import React, { useState } from 'react';
import userContext from './userContext';

const UserState = (props) => {

    const host = "http://localhost:5000";
    let userInitial = []
    // eslint-disable-next-line
    const [user, setUser] = useState(userInitial)



    const getuserdata = async () => {
        // API Call 
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setUser(json)
    }

    const updatebudget = async (id, budget) => {
        // API Call 
        const response = await fetch(`${host}/api/auth/updatebudget/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ budget })
        });
        // eslint-disable-next-line
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(user))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].budget = budget
                break;
            }
        }
        // console.log(newNotes);
        setUser(newNotes);
    }





    return <div>
        <userContext.Provider value={{ user, getuserdata, updatebudget }}>
            {props.children}
        </userContext.Provider>
    </div>;
};

export default UserState;
