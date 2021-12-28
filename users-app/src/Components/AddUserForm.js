import {useState} from 'react'
import Card from "../UI/Card"
import classes from './AddUserForm.module.css'
import Button from '../UI/Button'
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

        if(newUsername.trim().length ===0 || newAge.trim().length === 0) {
            return;
        }

        if(+newAge < 1) {
            return;
        }

        const newUser = {
        "username": newUsername,
        "age": newAge,
        id: Math.random().toString()}

        

        props.onAddUser(newUser);
        
        setNewAge('')
        setNewUsername("")


    }





    return (
        <Card className={classes.input}>
      <form onSubmit={submitHandler}>
          <h1>Add New User</h1>
          <h4>Name:</h4>
          <input type="text" value={newUsername} onChange={userNameHandler}></input>
          <h4>Age:</h4>
         
          <input type="number" value={newAge} onChange={ageHandler}></input>
            <Button type="submit">Submit</Button>



      </form>
      </Card>
    );




}
export default AddUserForm;