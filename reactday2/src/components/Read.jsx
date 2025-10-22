const read = (props) => {

    const  users = props.users;
    const  setUsers = props.setUsers;

    console.log(props)

//     const [users, setUsers] = useState([
//     { name: "Jhone", age: 22 },
//     { name: "kamlesh", age: 19 },
//     { name: "Rinku", age: 21 },

//   ]);

    const renderuser = users.map((users, index) => {
        return <li key={index}>name: {users.name}</li>
    });

    return (
        <div>
            <h1>User Data</h1>
            <li> 
                <ol>{renderuser}</ol>
            </li>
        </div>
    )
}

export default read;