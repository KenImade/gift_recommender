import React from "react";
import '../styles/Home.css';
import PriceSlider from "./PriceSlider";

function Home() {

    return (
        <section className="home">
            <h1 className="title">Welcome to Gift Recommender: Your Personal Christmas Gift Assistant.</h1>
            <PriceSlider/>
        </section>
    )
}

export default Home;