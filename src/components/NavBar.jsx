import { useContext } from "react";
import { Link } from "react-router";
import { SessionContext } from "../contexts/SessionContext"

const NavBar = ()=>{
    const {username} = useContext(SessionContext)
    return <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/articles/1">Articles</Link>
        <Link to="/users">User</Link>
        {username?<Link to={`/users/${username}`}>Account: {username}</Link>:<p className="unclickableLink"></p>}
    </div>
}

export default NavBar