import React, { useState } from "react";
import "../styles/PriceSlider.css";


function PriceSlider() {

    const [value, setValue] = useState(300);

    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="slider">
            <div className="slider-title-container">
                <h4>Choose a Price</h4>
                <div className="price-tracker">£{value.toLocaleString()}</div>
            </div>
            
            <div className="price-content">
                <div className="text-box-left">
                    <label>Min</label>
                    <p id="min-value">£1</p>
                </div>

                <div className="range-slider">
                    <div className="range-fill"></div>

                    <input
                        type="range"
                        className="range-selector"
                        value={value}
                        min="1"
                        max="8001"
                        step="5"
                        onChange={handleChange}
                    />
                </div>

                <div className="text-box-right">
                    <label>Max</label>
                    <p id="max-value">£8,000</p>
                </div>
            </div>
        </div>
    )
}

export default PriceSlider;