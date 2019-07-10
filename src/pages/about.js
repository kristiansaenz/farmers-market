import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


const AboutPage = () => {
    return(
        <section className="hero is-medium is-primary is-bold">
        <div clasNames="hero-body">
            <div class="container">
                <Header headertext="About SkyGarden"/>
                <h2 class="subtitle">
                    We are an online farmers market. 
                    Here you can search by location 
                    to find a farm near you.
                </h2>
            </div>
        </div>
        </section>
    )
}

export default AboutPage