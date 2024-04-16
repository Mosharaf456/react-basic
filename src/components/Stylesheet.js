import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    /*
    *********************** Styling and CSS Basics**************************
        1. CSS stylesheets
        2. Inline styling
        3. CSS Modules
        4. CSS in JS Libaries (Styled Components)
    */
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet