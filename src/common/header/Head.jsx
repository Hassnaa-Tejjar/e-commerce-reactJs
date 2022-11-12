import React from "react"
import { Link } from "react-router-dom"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +212 665889844</label>
            <i className='fa fa-envelope'></i>
            <label><Link to="/contactez-nous" className="links"> contact@5smaroc.com</Link></label>
          </div>
          <div className='right row RText'>
            <label><Link to="/references" className="links">Nos références</Link></label>
            <label><Link to="/about-us" className="links">A propos de nous</Link></label>
            <label ><Link to="/contactez-nous" className="links">Contactez-nous </Link></label>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
