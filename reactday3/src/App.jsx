import React from 'react'

import {useState} from "react";

const App = () => {
  const[todos, setTodos] = useState([
    {id: 1, title: "Project kr le", isCompleted: false},
  ])

  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(false)
  const [gender, setgender] = useState("male")
  const [City, setCity] = useState("delhi")

  return (
    <div>
      <h1>Create Task</h1>
      <form action="">
        Title:- 
        <input onChange={(e) => settitle(e.target.value)} value={title} type="text" placeholder='Enter Title' />
        <br /> <br />
        <input onChange={(e) => setcompleted(e.target.checked)} type="checkbox" checked={completed} placeholder='' /> Completed
        <br /><br />
        <input onChange={(e) => setgender(e.target.value)} checked={gender == "male" && true} type="radio" />
        male
        <br /><br />
        <input onChange={(e) => setgender(e.target.value)} checked={gender == "female" && false} type="radio" />
        female
        <br /><br />
        <select value={City} onChange={(e) => setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="varanasi">Varanasi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App