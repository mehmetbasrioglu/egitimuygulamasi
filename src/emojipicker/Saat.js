import React from 'react'

function Saat({...props}) {
    return (
        <div>
             <span>
            {(props.time.h >= 10) ? props.time.h : "0"+ props.time.h}
             :{(props.time.m >= 10) ? props.time.h : "0"+ props.time.m}
             :{(props.time.s >= 10) ? props.time.s : "0"+ props.time.s}
              / 01:30:00</span>
        </div>
    )
}

export default Saat
