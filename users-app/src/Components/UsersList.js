import User from "./User"
import Card from "../UI/Card"
import classes from "./UsersList.module.css"
const UsersList = (props) => {

    

    return (
        <Card className={classes.users}>
        <ul>
        {props.users.map((user) => (
            <User
                name = {user.username}
                key = {user.id}
                age = {user.age}
                
                />

        ))}

        
        </ul>
        </Card>
    )

}
export default UsersList