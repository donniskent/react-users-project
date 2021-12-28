import User from "./User"
import Card from "../UI/Card"
import classes from "./UsersList.module.css"
const UsersList = (props) => {

    

    return (
        <Card className={classes.users}>
        <ul >
        {props.users.map((user) => (
            
            <User
                key = {user.id}
                name = {user.username}
                age = {user.age}
                
                />
            
        ))}

        
        </ul>
        </Card>
    )

}
export default UsersList