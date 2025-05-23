import { useContext } from "react";
import { Link } from "react-router";
import { SessionContext } from "../contexts/SessionContext"

const NavBar = ()=>{
    const {username} = useContext(SessionContext)
    return <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/users">User</Link>
        <Link to={`/users/${username}`}>Account</Link>
    </div>
}

export default NavBar