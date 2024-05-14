import React from 'react'
import Card from './card'

function Cards() {

    let videos = [
        {
            title:"Web Designing",
             chan:"WebDev",
              time:"2",
               src:"https://www.computerhope.com/jargon/c/computer-types.png"   
        },
        {
            title:"Web Developing",
             chan:"devlopment",
               time:"5",
                src:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
        },
        {
            title:"Graphic Designing", 
            chan:"designing",
              time:"4",
               src:"https://media.gcflearnfree.org/content/5588514bf07fac61f8440cf9_06_22_2015/keyboardandmouse_handsonkeyboard.png"
        },
        {
            title:"Graphic Designing", 
            chan:"designing",
              time:"4",
               src:"https://media.gcflearnfree.org/content/5588514bf07fac61f8440cf9_06_22_2015/keyboardandmouse_handsonkeyboard.png"
        },
        {
            title:"Graphic Designing", 
            chan:"designing",
              time:"4",
               src:"https://media.gcflearnfree.org/content/5588514bf07fac61f8440cf9_06_22_2015/keyboardandmouse_handsonkeyboard.png"
        },
        {
            title:"Graphic ", 
            chan:"designing",
              time:"4",
               src:"https://media.gcflearnfree.org/content/5588514bf07fac61f8440cf9_06_22_2015/keyboardandmouse_handsonkeyboard.png"
        }
    ]

  return (

    
    <div className="cards">

        

       {videos.map((e, i) => (
        <Card key={i} title={e.title} chan={e.chan} time={e.time} src={e.src} />
       ))}


  
    </div>
  )
}

export default Cards