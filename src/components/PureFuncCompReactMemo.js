import React from 'react'

function PureFuncCompReactMemo({name}) {
    console.log('Rendering react memo PureFuncCompReactMemo')
  return (
    <div>PureFuncCompReactMemo {name}</div>
  )
}

export default React.memo(PureFuncCompReactMemo)