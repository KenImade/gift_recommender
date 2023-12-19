import React from "react";
import '../styles/Home.css';
import PriceSlider from "./PriceSlider";
import CategoryPicker from "./CategoryPicker";

function Home() {

    return (
        <section className="home">
            <h1 className="title">Welcome to Gift Recommender: Your Personal Christmas Gift Assistant.</h1>
            <section className="input-components">
                <PriceSlider/>
                <CategoryPicker/>
            </section> 
        </section>
    )
}

export default Home;