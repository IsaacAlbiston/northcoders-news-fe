import { useContext } from "react";
import { Link } from "react-router";
import { SessionContext } from "../contexts/SessionContext"

const NavBar = ()=>{
    const {username} = useContext(SessionContext)
    return <div className="NavBar">
        <Link to="/">
            <p className="link">Home</p>
        </Link>
        <Link to="/articles">
            <p className="link">Articles</p>
        </Link>
        <Link to="/users">
            <p className="link">Users</p>
        </Link>
        <Link to={`/users/${username}`}>
            <p className="link">Account</p>
        </Link>
    </div>
}

export default NavBar