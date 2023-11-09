import {Link} from "react-router-dom"

export default function Nav() {
    return(
        <nav>
            <Link to="/">[HOME]</Link>
            <Link to="/users">[ALL USER]</Link>
            <Link to="/users/123">[USER 123]</Link>
            <Link to="/users/me">[ME]]</Link>
        </nav>
    )
}