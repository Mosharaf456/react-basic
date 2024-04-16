import React from 'react'
import './appStyles.css';
import styles from './appStyles.module.css';

function ModuleBasedStyles() {
    /*
        3. CSS Modules : it is available with react scripts v2.0 and above 
        And there is a naming convention for CSS Modules:
        The CSS file name should be [name].module.css.
        The CSS class name should be [name]__[class].

         regular stylesheet conflict if we add regular stylesheet in src/App.js
    */
    return (
        <div>
            <h1 className='error'>Error regular stylesheet added</h1>
            <h2 className={styles.success}>Success</h2>
            
        </div>
    )
}

export default ModuleBasedStyles