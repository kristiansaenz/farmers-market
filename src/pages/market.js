import React from "react"
import Header from "../components/header"


const MarketPage = () => {
    return (
        <section className="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <Header headertext="Marketplace"/>
                <h2 class="subtitle">
                    Input your location here. See what local 
                    venders you can order from or pickup your produce from.
                </h2>
            </div>
        </div>
        </section>
    )
}

export default MarketPage