import { useState } from "react";

const App = () => {
  // let username = "Sarthak"
  const [username, setUsername] = useState("Sarthak");

  const ChangeHandler = () => {
    setUsername("Ankur");
  }
  console.log(username) 
  
 const profile = [
  {name: "Aaditya", age: 20},
  {name: "Ankur", age: 19},
  {name: "Aashu", age: 22},
 ];

 const updateprofile = profile.map((profile, index)=> {
  return (
  <li key={index}>
    <span>Name: {profile.name}</span> || 
    <small>Age: {profile.age}</small>
  </li>
  );
 })

  return (
    <>
      <h1>Rendring JSON</h1>
      <ol> {updateprofile} </ol>

      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={ChangeHandler}>Change Name</button>
    </>
  )
}

export default App