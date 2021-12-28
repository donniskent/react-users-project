
import UsersList from "./Components/UsersList";
import AddUserForm from "./Components/AddUserForm";
import {useState} from 'react'
function App() {
  
  const DUMMY_DATA = [
    {"username": "billy",
      "age": 27,
    id: "e0"},
      {"username": "Bobby",
      "age": 12,
      id: "e1"},

  ];


  const [users, setUsers] = useState(DUMMY_DATA)

  const addUserHandler = (newUser) => 
  {   
    setUsers(oldUsers =>{
      return [newUser, ...oldUsers]})


  }

  
  
  return (
    <div className="App">
     

    <AddUserForm onAddUser={addUserHandler}/>
     <UsersList users={users}/>



    </div>
  );
}

export default App;
