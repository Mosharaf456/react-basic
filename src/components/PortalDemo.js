import React from 'react'
import ReactDOM from 'react-dom'

/* 
*********React Portals**************
React portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component:  
DOM node that is not under this root element.
React Portals are used to render components outside the parent component.
It,s behaves like a normal react component.
*/
function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
        Portal Demo
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo