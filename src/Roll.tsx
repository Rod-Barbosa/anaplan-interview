import React from "react"

export default function  Roll(props: any){
    // console.log(props)
    return (
    <div className="roll">
        <span className="roll__description">{props.description}</span>
        <span className="roll__id">{props.id} </span>
        <span className="roll__amount">{props.amount}</span>
        <span className="roll__btn--del"><button className="btn--delete">X</button></span>    
    </div>
    )

}