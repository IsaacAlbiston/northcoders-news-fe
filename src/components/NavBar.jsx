import { Link } from "react-router";

const NavBar = ()=>{
    return <>
        <Link to="/"> 
            <button>
                Home
            </button>
        </Link>
        <Link to="/articles">
            <button>
                Articles
            </button>
        </Link>
        <Link to="/users">
            <button>
                Users
            </button>
        </Link>
        <Link to="/users/username">
            <button>
                Account
            </button>
        </Link>
    </>
}

export default NavBar