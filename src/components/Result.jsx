import React from 'react'



export default function Result(props) {

    return (<>
        <img src = {props.src} alt = {props.alt}/>
        <h3>{props.title}</h3>
            </>)
}