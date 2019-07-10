import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import "../mystyles.scss"
import Navbar from "../components/navbar"


const HomePage = () => {
    return(
        <section className="hero is-fullheight is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <Header headertext="Welcome to SkyGarden"/>
                <h2 class="subtitle">
                    Online farmers market
                </h2>
            </div>
        </div>
        <Navbar />
        </section>
    )
}

export default HomePage