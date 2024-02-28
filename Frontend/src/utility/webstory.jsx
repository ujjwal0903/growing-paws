import React from "react"
import Card from "./card"
import Info from "./info"
import Navbar from "../body/sections/Navbar"
import "../cssfiles/webstorycss.css"

export default function Webstory(){
    const cards = Info.map(item =>{
        return(
            <Card 
                key = {item.id}
                item = {item}
            />
        )
    })
    return(
        <>
            <Navbar/>
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}