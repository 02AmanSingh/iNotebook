import React from 'react'

export const Alert = (props) => {
    return (
        <div style={{padding: "3.5rem 0 0 0"}} >
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
