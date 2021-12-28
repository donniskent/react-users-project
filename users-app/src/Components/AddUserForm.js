import {useState} from 'react'
const AddUserForm = (props) => 
{

    //logic for adding a new user 
    const [newUsername, setNewUsername] = useState('');

    const userNameHandler = (event) => 
    {
        setNewUsername(event.target.value)
    }

    const [newAge, setNewAge] = useState('');

    const ageHandler = (event) => 
    {
        setNewAge(event.target.value)
    }
    

    //including handlers and such 

    const submitHandler = (event) => {
        event.preventDefault();


        const newUser = {
        "username": newUsername,
        "age": newAge,
        id: Math.random.toString()}

        

        props.onAddUser(newUser);
        
        setNewAge('')
        setNewUsername("")


    }





    return (

      <form onSubmit={submitHandler}>
          <h2>Add New User</h2>
          <h4>Name:</h4>
          <input value={newUsername} onChange={userNameHandler}></input>
          <h4>Age:</h4>
         
          <input value={newAge} onChange={ageHandler}></input>
            <button type="submit">Submit</button>



      </form>

    );




}
export default AddUserForm;