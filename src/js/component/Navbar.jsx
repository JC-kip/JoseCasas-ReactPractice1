import React from "react";

const Navbar = () => {
    return ( 
        <nav className="navbar text-center">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;