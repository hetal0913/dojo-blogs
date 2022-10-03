import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* custom styles demo */}
                {/* <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</a> */}
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;