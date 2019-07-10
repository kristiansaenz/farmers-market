import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import "../mystyles.scss"
import Navbar from "../components/navbar"


const IndexPage = () => {
    return(
        <section className="hero is-medium is-dark is-bold">
        <div clasNames="hero-body">
            <div class="container">
                <Header headertext="Welcome to SkyGarden"/>
                <h2 class="subtitle">
                    Online farmers market
                </h2>
                <Navbar />
            </div>
        </div>
        </section>
    )
}

export default IndexPage