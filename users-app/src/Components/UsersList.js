import User from "./User"
const UsersList = (props) => {

    

    return (
        <ul>
        {props.users.map((user) => (
            <User
                name = {user.username}
                key = {user.id}
                age = {user.age}
                
                />

        ))}

        
        </ul>
        
    )

}
export default UsersList