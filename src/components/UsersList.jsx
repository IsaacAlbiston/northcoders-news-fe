import UseLoadingHook from "../hooks/UseLoadingHook"
import { fetchUsers } from "../utils/api"
import UserCard from "./UserCard"

const UsersList = ()=>{
    const { data:usersInfo, isLoading, error } = UseLoadingHook(fetchUsers)

    return <>
    {error?<h2>Users List Not Found</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <ol>
        {usersInfo.map(user=>{
            return <li key={user.username} className="listItem" >
                <UserCard user={user} />
            </li>
        })}
    </ol>
    </>}
    </>}
    </>
}

export default UsersList