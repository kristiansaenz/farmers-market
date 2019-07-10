import React from "react"
import { Link } from "gatsby"
import "../mystyles.scss"


const Navbar = () => {
    return(
    <nav class="navbar" role="navigation" aria-label="main navigation">  
        <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-link"><Link to="/home/">Home</Link></a>
            <a class="navbar-link"><Link to="/about/">About</Link></a>
            <a class="navbar-link"><Link to="/market/">Market</Link></a>
            <a class="navbar-link"><Link to="/contact/">Contact</Link></a>
        </div>
    
        <div class="navbar-end">
            <div class="navbar-item">
            <div class="buttons">
                <a class="button is-link"><strong>Register</strong></a>
                <a class="button is-light">Log in</a>
            </div>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default Navbar
