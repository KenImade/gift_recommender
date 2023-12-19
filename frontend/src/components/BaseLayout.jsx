import React from "react";
import "../styles/BaseLayout.css";


function BaseLayout({children}) {
    return (
        <section className="base">
            {children}
        </section>
    )
}

export default BaseLayout;