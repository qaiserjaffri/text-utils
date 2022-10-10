import React from 'react'

export default function Alert(props) {
    const capitalize = (world)=>{
        const lower = world.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
       <div><strong>{capitalize(props.alert.type)}!</strong> {props.alert.message}</div>
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
