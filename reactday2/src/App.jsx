import { useState } from 'react';
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx"


const App = () => {

  const [users, setUsers] = useState([
    { name: "Jhone", age: 22 },
    { name: "kamlesh", age: 19 },
    { name: "Rinku", age: 21 },

  ]);


  // const changeHandler = (e) => {
  //   // console.log(e.target.value);
  //   setfullName(e.target.value);
  // }

  // console.log(fullName);



  return (
    <>
      <Create />
      <hr />
      <Read users= {users} setUers={setUsers} />
    </>
  )
}

export default App;