import { Link } from "react-router";

const NavBar = ()=>{
    return <div className="NavBar">
        <Link to="/"> 
            Home
        </Link>
        <Link to="/articles">
            Articles
        </Link>
        <Link to="/users">
            Users
        </Link>
        <Link to="/users/username">
            Account
        </Link>
    </div>
}

export default NavBar