import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    /*
    *********************** Styling and CSS Basics 4 ways **************************
        1. CSS stylesheets
        2. Inline styling
        3. CSS Modules : it is available with react scripts v2.0 and above 
        And there is a naming convention for CSS Modules:
        The CSS file name should be [name].module.css.
        The CSS class name should be [name]__[class].
        
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