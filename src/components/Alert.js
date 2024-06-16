import React from 'react'

function Alert(props) {
  return (
        props.Alert && <div className={`alert alert-${props.Alert.type}  alert-dismissible fade show`} style={{color:props.mode==='dark'?'white':'black'}} role="alert">
        <strong>{props.Alert.type}</strong>:{props.Alert.msg}
      </div>

  )
}

export default Alert