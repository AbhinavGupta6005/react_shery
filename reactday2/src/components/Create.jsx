import React from 'react'
import { useState } from 'react';

const Create = (props) => {

    console.log(props)

    const submitHandler = (e) => {
        e.preventDefault();
        const newuser = { fullName, age }
        console.log(newuser);
    }

    const [fullName, setfullName] = useState("")
    const [age, setage] = useState(18)

    return (
        <div>
            <h1>Register User</h1>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setfullName(e.target.value)} value={fullName} type="text" placeholder='Full Name' />
                <input onChange={(e) => setage(e.target.value)} value={age} type="number" placeholder='Age' />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Create