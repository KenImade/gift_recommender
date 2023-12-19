import React from "react";
import "../styles/CategoryPicker.css";

function CategoryPicker() {

    return (
        <div className="card">
            <h4>Choose a Category</h4>

            <form>
                <select>
                    <option>Select a Category</option>
                </select>
            </form>
        </div>
    )
}

export default CategoryPicker;