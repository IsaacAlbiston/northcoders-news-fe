const UserCard = ({user})=>{
    return <>
    <div className="UserCard">
        <img src={user.avatar_url} alt="User Avatar" className="articleImage"/>
        <p>{user.username}</p>
    </div>
    </>
}

export default UserCard