import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-cubes'></i>,
      title: "Large choix de services",
     
    },
    {
      cover: <i class='fa-solid fa-clock'></i>,
      title: "Traitement rapide des commandes",
      
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Confiance et sécurité ",
      
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Services clients & conseils ",
     
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle' style={{backgroundColor:'#f2fff2'}}>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
